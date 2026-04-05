// Data & Colors
const colors = {
    'A': { hex: '#00e676', darkScale: '#004d27' }, // Neon Green
    'B': { hex: '#ffeb3b', darkScale: '#665e18' }, // Neon Yellow
    'C': { hex: '#ff9800', darkScale: '#663d00' }, // Vibrant Orange
    'D': { hex: '#ff1744', darkScale: '#66091b' }  // Neon Red
};


// Load the explicitly parsed CSV data from gradingData.js
const communities = PREBUILT_COMMUNITIES;
const indicators = PREBUILT_INDICATORS;
let data = PREBUILT_DATA;
const NUM_INDICATORS = indicators.length;
const NUM_COMMUNITIES = communities.length;

// Initialize DOM Elements
const leftSidebar = document.getElementById('sidebar-left');
const rightSidebar = document.getElementById('sidebar-right');

communities.forEach((comm, i) => {
    let div = document.createElement('div');
    div.className = 'comm-item';
    div.id = 'comm-' + safeId(comm);
    
    let textSpan = document.createElement('span');
    textSpan.innerText = comm;
    
    let lockSpan = document.createElement('span');
    lockSpan.className = 'lock-icon';
    lockSpan.innerText = '🔒';
    lockSpan.title = 'Lock Highlight';
    lockSpan.onclick = (e) => toggleLock(e, 'community', comm);
    
    div.appendChild(textSpan);
    div.appendChild(lockSpan);

    div.onclick = () => selectItem('community', comm);
    div.onmouseenter = () => handleHover('community', comm);
    div.onmouseleave = () => handleHoverOut();
    
    if (i < 29) leftSidebar.appendChild(div);
    else rightSidebar.appendChild(div);
});

const indRing = document.getElementById('indicator-ring');

function getPos(d, w, h) {
    if (d <= w) return { x: d, y: 0 }; // Top
    if (d <= w + h) return { x: w, y: d - w }; // Right
    if (d <= 2 * w + h) return { x: w - (d - (w + h)), y: h }; // Bottom
    return { x: 0, y: h - (d - (2 * w + h)) }; // Left
}

// Render dynamic indicators
window.renderIndicators = function() {
    const showGeneric = document.getElementById('chk-generic')?.checked ?? true;
    const showFlood = document.getElementById('chk-flood')?.checked ?? true;
    const showHeat = document.getElementById('chk-heat')?.checked ?? true;

    const activeIndicators = indicators.filter(ind => {
        const meta = indicatorMetadata[ind];
        if (!meta) return true; // Show unmapped indicators just in case
        if (meta.hazard === 'Generic' && !showGeneric) return false;
        if (meta.hazard === 'Flood' && !showFlood) return false;
        if (meta.hazard === 'Heatwave' && !showHeat) return false;
        return true;
    });

    // Safely calculate dynamic sizes, falling back to viewport derivatives to prevent NaN crashes
    const currentRect = indRing.getBoundingClientRect();
    const rectW = currentRect.width || window.innerWidth * 0.7;
    const rectH = currentRect.height || window.innerHeight * 0.7;
    const perim = 2 * rectW + 2 * rectH;

    // Clean current rings dots before making new ones
    indRing.querySelectorAll('.indicator-item').forEach(el => el.remove());

    const numActive = activeIndicators.length;
    const currentSpacing = numActive > 0 ? perim / numActive : perim;

    activeIndicators.forEach((ind, i) => {
        let d = i * currentSpacing;
        let pos = getPos(d, rectW, rectH);
        let div = document.createElement('div');
        div.className = 'indicator-item';
        div.id = 'ind-' + safeId(ind);
        
        let textSpan = document.createElement('span');
        textSpan.innerText = ind;
        
        let lockSpan = document.createElement('span');
        lockSpan.className = 'lock-icon';
        lockSpan.innerText = '🔒';
        lockSpan.title = 'Lock Highlight';
        lockSpan.onclick = (e) => toggleLock(e, 'indicator', ind);
        
        div.appendChild(textSpan);
        div.appendChild(lockSpan);
        
        // Show full name on hover from metadata
        const label = indicatorMetadata[ind]?.label || ind;
        const hazard = indicatorMetadata[ind]?.hazard || "Unknown";
        div.title = `${ind}: ${label} (${hazard})`;
        
        div.style.left = (pos.x / rectW * 100) + '%';
        div.style.top = (pos.y / rectH * 100) + '%';
        div.onclick = () => selectItem('indicator', ind);
        div.onmouseenter = () => handleHover('indicator', ind);
        div.onmouseleave = () => handleHoverOut();
        
        // Restore active state seamlessly
        if (mode === 'indicator' && selectedId === ind) {
            div.classList.add('active');
        }

        indRing.appendChild(div);
    });

    // Refresh display
    if (mode === 'grade' || mode === 'community') {
        updateView();
    }
};

// Initial draw with a tiny delay to ensure the browser has painted CSS layouts first
setTimeout(renderIndicators, 100);

// Interactive Logic
let mode = null; 
let selectedId = null; 

// Make selectItem available globally for onclick from HTML
window.selectItem = function(type, id) {
    // Toggle off if clicking the same item twice
    if (mode === type && selectedId === id) {
        mode = null;
        selectedId = null;
    } else {
        mode = type;
        selectedId = id;
    }
    updateView();

    // Toggle center area: show comm detail or default grade cards
    const defaultCards = document.getElementById('grade-cards-default');
    const detailInner  = document.getElementById('comm-detail-inner');
    const gradeCenter  = detailInner ? detailInner.closest('.grade-center') : null;
    if (defaultCards && detailInner) {
        if (mode === 'community' && selectedId) {
            window._lastSelectedComm = selectedId;
            defaultCards.classList.add('hidden');
            detailInner.classList.remove('hidden');
            if (gradeCenter) gradeCenter.classList.add('comm-active');
            populateCommDetail(selectedId);
        } else {
            defaultCards.classList.remove('hidden');
            detailInner.classList.add('hidden');
            if (gradeCenter) gradeCenter.classList.remove('comm-active');
        }
    }
}

function populateCommDetail(commName) {
    // ── 1. Find score data ──────────────────────────────
    const scoreItem = (window.SCORES_DATA || []).find(s => s.name === commName);

    // ── 2. Gauge ────────────────────────────────────────
    const gaugeEl = document.getElementById('comm-detail-gauge');
    if (gaugeEl) {
        const getAngle = v => (v / 100) * 180 - 90;
        const showFlood   = scoreItem && scoreItem.flood   != null;
        const showHeat    = scoreItem && scoreItem.heat    != null;
        const showGeneric = scoreItem && scoreItem.generic != null;

        gaugeEl.innerHTML = `
            <div class="cd-gauge-title">${commName}</div>
            <div class="gauge-container" style="width:90%;aspect-ratio:100/65;height:auto;">
                <svg viewBox="0 0 100 65" class="gauge-svg">
                    <path class="gauge-arc" d="M 15 55 A 35 35 0 0 1 31 24" stroke="#ff8a80"/>
                    <path class="gauge-arc" d="M 31 24 A 35 35 0 0 1 69 24" stroke="#ffd54f"/>
                    <path class="gauge-arc" d="M 69 24 A 35 35 0 0 1 85 55" stroke="#69f0ae"/>
                    ${showFlood   ? `<line class="gauge-needle needle-flood"   x1="50" y1="55" x2="50" y2="20" style="transform-box:fill-box;transform-origin:50% 100%;transform:rotate(${getAngle(scoreItem.flood)}deg)"/>` : ''}
                    ${showHeat    ? `<line class="gauge-needle needle-heat"    x1="50" y1="55" x2="50" y2="20" style="transform-box:fill-box;transform-origin:50% 100%;transform:rotate(${getAngle(scoreItem.heat)}deg)"/>` : ''}
                    ${showGeneric ? `<line class="gauge-needle needle-generic" x1="50" y1="55" x2="50" y2="20" style="transform-box:fill-box;transform-origin:50% 100%;transform:rotate(${getAngle(scoreItem.generic)}deg)"/>` : ''}
                    <circle cx="50" cy="55" r="3" fill="#2a2a35" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
                </svg>
            </div>
            <div class="score-legend" style="justify-content:center;gap:14px;margin-top:6px;">
                ${showFlood   ? `<div class="legend-item val-flood"><span class="legend-dot">●</span><span class="legend-label">Flood</span><span class="legend-val">${scoreItem.flood}</span></div>`   : '<div class="legend-item" style="color:#555">No Flood Data</div>'}
                ${showHeat    ? `<div class="legend-item val-heat"><span class="legend-dot">●</span><span class="legend-label">Heat</span><span class="legend-val">${scoreItem.heat}</span></div>`     : ''}
                ${showGeneric ? `<div class="legend-item val-generic"><span class="legend-dot">●</span><span class="legend-label">Generic</span><span class="legend-val">${scoreItem.generic}</span></div>` : ''}
            </div>
        `;
    }

    // ── 3. Demographics ─────────────────────────────────
    const demoEl = document.getElementById('comm-detail-demo');
    if (demoEl) {
        // Try to find from communitiesDataStaticRaw
        const rawRef = window.communitiesDataStaticRaw || (typeof communitiesDataStaticRaw !== 'undefined' ? communitiesDataStaticRaw : null);
        let demo = null;
        if (rawRef && rawRef.data) {
            const row = rawRef.data.find(r => {
                const cols = r.split(',');
                return (cols[1] || '').replace(/"/g,'').trim() === commName;
            });
            if (row) {
                const c = row.split(',');
                demo = {
                    code: c[0], country: c[2], province: c[3], district: c[4],
                    totalPop: c[13], male: c[14], female: c[15],
                    children: c[16], elderly: c[17], disabilities: c[18], hhs: c[19],
                    description: (c[24] || '').replace(/"/g,'').trim()
                };
            }
        }

        if (demo) {
            demoEl.innerHTML = `
                <div class="cd-demo-title">Demographics</div>
                <div class="cd-demo-grid">
                    <div class="cd-demo-item"><span class="cd-demo-label">District</span><span class="cd-demo-val">${demo.district || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Province</span><span class="cd-demo-val">${demo.province || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Total Pop.</span><span class="cd-demo-val">${demo.totalPop || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Households</span><span class="cd-demo-val">${demo.hhs || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Male</span><span class="cd-demo-val">${demo.male || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Female</span><span class="cd-demo-val">${demo.female || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Children</span><span class="cd-demo-val">${demo.children || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Elderly</span><span class="cd-demo-val">${demo.elderly || '—'}</span></div>
                    <div class="cd-demo-item"><span class="cd-demo-label">Disabilities</span><span class="cd-demo-val">${demo.disabilities || '—'}</span></div>
                </div>
                ${demo.description ? `<div class="cd-demo-desc">${demo.description}</div>` : ''}
            `;
        } else {
            demoEl.innerHTML = `<div class="cd-demo-title">Demographics</div><div style="color:#666;font-size:0.85rem;margin-top:10px;">No demographic data available.</div>`;
        }
    }

    // ── 4. Grade boxes ──────────────────────────────────
    const gradeRowEl = document.getElementById('comm-grade-row');
    if (gradeRowEl) {
        const gradeColors = { A: '#00e676', B: '#ffea00', C: '#ff9100', D: '#ff1744' };
        const gradeLabels = { A: 'High Resilience', B: 'Moderate', C: 'At Risk', D: 'Critical' };

        gradeRowEl.innerHTML = ['A','B','C','D'].map(g => {
            const count = indicators.filter(ind => data[commName] && data[commName][ind] === g).length;
            return `
                <div class="cd-grade-box" onclick="selectItem('grade','${g}')" style="border-color:${gradeColors[g]};">
                    <div class="cd-grade-letter" style="color:${gradeColors[g]};">${g}</div>
                    <div class="cd-grade-count">${count}</div>
                    <div class="cd-grade-label">${gradeLabels[g]}</div>
                </div>
            `;
        }).join('');
    }
}

// Global hover interactions
let lockedHoverId = null;
let lockedHoverType = null;
let task12SelectedInd = null; // Track for Task 13 variety
let lastLockedComm = null;    // Ensure variety in multi-community sequences
let lastLockedInd = null;     // Ensure variety in multi-indicator sequences

window.updateHoverLabel = function(type, id) {
    const labelDisplay = document.getElementById('hover-label-display');
    if (!labelDisplay) return;
    
    if (!id || type !== 'indicator') {
        labelDisplay.classList.remove('visible');
        return;
    }
    
    const title = indicatorMetadata[id]?.label || id;
    const hazard = indicatorMetadata[id]?.hazard || '';
    labelDisplay.innerHTML = `<b>${id}</b>: ${title} ${hazard ? `<span style="opacity:0.7;font-size:13px;margin-left:8px;">(${hazard})</span>` : ''}`;
    labelDisplay.classList.add('visible');
};

window.toggleLock = function(event, type, id) {
    event.stopPropagation(); // Prevents normal selectItem click handler
    
    if (lockedHoverId === id) {
        lockedHoverId = null; // Turn off lock
        lockedHoverType = null;
        document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));
        handleHoverOut(true); 
    } else {
        document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));
        lockedHoverId = id; // Turn on lock for this item
        lockedHoverType = type;
        let el = document.getElementById((type === 'community' ? 'comm-' : 'ind-') + safeId(id));
        if (el) el.classList.add('locked');
        
        handleHover(type, id, true); // Force highlight to target
    }
};

window.handleHover = function(type, id, force = false) {
    // Always dynamically update text natively on any hover, regardless of pin locks!
    updateHoverLabel(type, id);

    if (mode !== 'grade') return;
    if (lockedHoverId && !force) return;

    const grade = selectedId;
    const sId = safeId(id);

    if (type === 'community') {
        const commEl = document.getElementById('comm-' + sId);
        if (commEl) commEl.classList.add('hover-highlight');

        indicators.forEach(ind => {
            if (data[id] && data[id][ind] === grade) {
                let indEl = document.getElementById('ind-' + safeId(ind));
                if (indEl) indEl.classList.add('hover-highlight');
                
                let path = document.querySelector(`.path-${sId}-${safeId(ind)}`);
                if (path) {
                    path.classList.add('highlight-line');
                }
            }
        });
    } else if (type === 'indicator') {
        const indEl = document.getElementById('ind-' + sId);
        if (indEl) indEl.classList.add('hover-highlight');

        communities.forEach(comm => {
            if (data[comm] && data[comm][id] === grade) {
                let commEl = document.getElementById('comm-' + safeId(comm));
                if (commEl) commEl.classList.add('hover-highlight');

                let path = document.querySelector(`.path-${safeId(comm)}-${sId}`);
                if (path) {
                    path.classList.add('highlight-line');
                }
            }
        });
    }
};

window.handleHoverOut = function(force = false) {
    // Revert to locked item, or currently selected indicator, or clear
    if (lockedHoverId && !force) {
        updateHoverLabel(lockedHoverType, lockedHoverId);
    } else if (mode === 'indicator' && selectedId) {
        updateHoverLabel('indicator', selectedId);
    } else {
        updateHoverLabel(null, null);
    }

    if (mode !== 'grade') return;
    if (lockedHoverId && !force) return; // Keep highlights alive if locked!
    
    document.querySelectorAll('.hover-highlight').forEach(el => el.classList.remove('hover-highlight'));
    document.querySelectorAll('.highlight-line').forEach(el => el.classList.remove('highlight-line'));
};

function safeId(str) { 
    if (!str) return '';
    return str.replace(/[^a-zA-Z0-9_-]/g, ''); 
}

function updateView() {
    // 1. Reset everything
    lockedHoverId = null; // Clear lock across main state shifts
    lockedHoverType = null;
    
    // Always show selected indicator label if in indicator mode
    if (mode === 'indicator' && selectedId) {
        updateHoverLabel('indicator', selectedId);
    } else {
        updateHoverLabel(null, null);
    }
    
    document.body.classList.remove('mode-grade');
    if (mode === 'grade') document.body.classList.add('mode-grade');
    
    document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));
    document.querySelectorAll('.comm-item').forEach(el => { 
        el.className = 'comm-item'; 
        el.style.backgroundColor = ''; 
        el.style.color = ''; 
        el.style.borderColor = '';
        const span = el.querySelector('span');
        if (span) {
            span.style.color = '';
            span.style.backgroundColor = '';
        }
        const lock = el.querySelector('.lock-icon');
        if (lock) lock.style.color = '';
    });
    document.querySelectorAll('.indicator-item').forEach(el => { 
        el.className = 'indicator-item'; 
        el.style.backgroundColor = ''; 
        el.style.color = '';
        el.style.borderColor = '';
    });
    document.querySelectorAll('.grade-box').forEach(el => el.classList.remove('active'));
    const overlay = document.getElementById('lines-group');
    overlay.innerHTML = '';

    // 2. Apply rules based on selected mode
    if (mode === 'indicator') {
        let indEl = document.getElementById('ind-' + safeId(selectedId));
        if (indEl) indEl.classList.add('active');

        communities.forEach(comm => {
            let grade = data[comm][selectedId];
            let commEl = document.getElementById('comm-' + safeId(comm));
            if (grade && colors[grade]) {
                commEl.style.backgroundColor = colors[grade].darkScale;
                commEl.style.borderColor = colors[grade].hex;
                // Light Mode: Use white for highlighted only! 
                commEl.style.color = '#ffffff';
                const span = commEl.querySelector('span');
                if (span) span.style.color = '#ffffff';
            } else if (document.body.classList.contains('light')) {
                // Light Mode: Ensure others stay black
                commEl.style.color = '#1a1a2e';
                const span = commEl.querySelector('span');
                if (span) span.style.color = '#1a1a2e';
            }
        });

    } else if (mode === 'community') {
        let commEl = document.getElementById('comm-' + safeId(selectedId));
        commEl.classList.add('active');

        indicators.forEach(ind => {
            let grade = data[selectedId][ind];
            let indEl = document.getElementById('ind-' + safeId(ind));
            if (indEl) {
                if (grade && colors[grade]) {
                    indEl.style.backgroundColor = colors[grade].hex;
                    indEl.style.color = '#121212';
                    indEl.style.borderColor = colors[grade].hex;
                }
            }
        });

    } else if (mode === 'grade') {
        let gradeBox = document.getElementById('grade-' + selectedId);
        gradeBox.classList.add('active');
        
        let linesHTML = '';
        let colorHex = colors[selectedId].hex;

        communities.forEach(comm => {
            let commEl = document.getElementById('comm-' + safeId(comm));
            let hasAtLeastOne = false;
            
            indicators.forEach(ind => {
                if(data[comm][ind] === selectedId) {
                    hasAtLeastOne = true;
                    let indEl = document.getElementById('ind-' + safeId(ind));
                    if(indEl) {
                        // Highlight the indicator in the ring
                        indEl.style.backgroundColor = colorHex;
                        indEl.style.color = document.body.classList.contains('light') ? '#1a1a2e' : '#121212';
                        indEl.style.borderColor = colorHex;

                        // Calculate path for SVG line
                        let linesSvg = document.getElementById('lines');
                        let svgRect = linesSvg ? linesSvg.getBoundingClientRect() : { left: 0, top: 0 };
                        
                        let r1 = commEl.getBoundingClientRect();
                        let r2 = indEl.getBoundingClientRect();
                        
                        // Attach to the inner side of the Sidebar Community Box (translated to SVG space)
                        let x1 = (r1.left < window.innerWidth / 2) ? r1.right : r1.left;
                        x1 -= svgRect.left;
                        let y1 = (r1.top + r1.height / 2) - svgRect.top;
                        
                        // Attach to the precise center of the Indicator Ring point (translated to SVG space)
                        let x2 = (r2.left + r2.width / 2) - svgRect.left;
                        let y2 = (r2.top + r2.height / 2) - svgRect.top;
                        
                        // Smooth connection (bezier curve)
                        let dStr = `M ${x1},${y1} C ${(x1+x2)/2},${y1} ${(x1+x2)/2},${y2} ${x2},${y2}`;
                        
                        // Note: we accumulate string and inject at once for high performance
                        let lineClass = `path-${safeId(comm)}-${safeId(ind)}`;
                        linesHTML += `<path class="${lineClass}" d="${dStr}" stroke="${colorHex}" fill="none" stroke-width="1" opacity="0.15" />`;
                    }
                }
            });

            // Highlight the community box in the sidebar if it has a match
            if(hasAtLeastOne) {
                commEl.style.borderColor = colorHex;
                commEl.style.backgroundColor = colors[selectedId].darkScale;
                commEl.style.color = '#ffffff';
                const span = commEl.querySelector('span');
                if (span) span.style.color = '#ffffff';
            } else if (document.body.classList.contains('light')) {
                // Light Mode: Ensure others stay black!
                commEl.style.color = '#1a1a2e';
                const span = commEl.querySelector('span');
                if (span) span.style.color = '#1a1a2e';
            }
        });
        
        overlay.innerHTML = linesHTML;
    }
}

// Redraw lines smoothly on resize
window.addEventListener('resize', renderIndicators);

// ── View Switching ─────────────────────────────────────
let currentView = 'diagram';

window.switchView = function(view) {
    currentView = view;
    const diagramEl = document.getElementById('diagram-view');
    const tableEl   = document.getElementById('table-view');
    const linesEl   = document.getElementById('lines');
    const btnDiagram = document.getElementById('btn-diagram');
    const btnTable   = document.getElementById('btn-table');

    if (view === 'table') {
        diagramEl.style.display = 'none';
        linesEl.style.display   = 'none';
        tableEl.style.display   = 'flex';
        btnDiagram.classList.remove('active');
        btnTable.classList.add('active');
        renderTable();
    } else {
        tableEl.style.display   = 'none';
        diagramEl.style.display = 'flex';
        linesEl.style.display   = '';
        btnTable.classList.remove('active');
        btnDiagram.classList.add('active');
    }
};

// ── Table Rendering ────────────────────────────────────
// Sort state: { type: 'indicator'|'community', id: string|null, dir: 'asc'|'desc'|null }
let tableSort = { type: 'indicator', id: null, dir: null };
// Grade order for sorting: A=0 (best), D=3 (worst), null=4 (NA, always last)
const gradeOrder = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

window.sortTable = function(id, type = 'indicator') {
    if (tableSort.id === id && tableSort.type === type) {
        // Cycle: asc → desc → reset
        if (tableSort.dir === 'asc')  tableSort.dir = 'desc';
        else if (tableSort.dir === 'desc') { tableSort.id = null; tableSort.type = 'indicator'; tableSort.dir = null; }
    } else {
        tableSort.id = id;
        tableSort.type = type;
        tableSort.dir = 'asc';
    }
    renderTable();
};

// Helper to update the toolbar label panel
function updateTblLabel(ind) {
    const codeEl = document.getElementById('tbl-hover-code');
    const textEl = document.getElementById('tbl-hover-text');
    const panel  = document.getElementById('tbl-hover-label');
    if (!codeEl || !textEl || !panel) return;

    if (!ind || !indicatorMetadata[ind]) {
        codeEl.textContent = '';
        textEl.textContent = 'Hover over an indicator column to see its label';
        panel.classList.remove('active');
        return;
    }
    const meta = indicatorMetadata[ind];
    codeEl.textContent = ind;
    const hazardIcon = meta.hazard === 'Flood' ? '🌊' : meta.hazard === 'Heatwave' ? '🔥' : '⚙';
    textEl.textContent = `${meta.label}  ${hazardIcon} ${meta.hazard}  ·  ${meta.capital}`;
    panel.classList.add('active');
}

window.renderTable = function() {
    const showGeneric = document.getElementById('tbl-generic')?.checked ?? true;
    const showFlood   = document.getElementById('tbl-flood')?.checked   ?? true;
    const showHeat    = document.getElementById('tbl-heat')?.checked    ?? true;

    // Filter active indicators matching current checkboxes
    const activeInds = indicators.filter(ind => {
        const meta = indicatorMetadata[ind];
        if (!meta) return true;
        if (meta.hazard === 'Generic'  && !showGeneric) return false;
        if (meta.hazard === 'Flood'    && !showFlood)   return false;
        if (meta.hazard === 'Heatwave' && !showHeat)    return false;
        return true;
    });

    // If the sorted indicator is no longer visible, reset sort
    if (tableSort.type === 'indicator' && tableSort.id && !activeInds.includes(tableSort.id)) {
        tableSort = { type: 'indicator', id: null, dir: null };
    }

    const capitalOf = ind => indicatorMetadata[ind]?.capital?.[0] || '';

    const table = document.getElementById('data-table');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // ── Sort indicators (columns) horizontally ──
    let sortedInds = [...activeInds];
    if (tableSort.type === 'community' && tableSort.id && tableSort.dir) {
        sortedInds.sort((a, b) => {
            const ga = gradeOrder[data[tableSort.id]?.[a]] ?? 4;
            const gb = gradeOrder[data[tableSort.id]?.[b]] ?? 4;
            return tableSort.dir === 'asc' ? ga - gb : gb - ga;
        });
    }

    // ── Sort communities (rows) vertically ──
    let sortedComms = [...communities];
    if (tableSort.type === 'indicator' && tableSort.id && tableSort.dir) {
        sortedComms.sort((a, b) => {
            const ga = gradeOrder[data[a]?.[tableSort.id]] ?? 4;
            const gb = gradeOrder[data[b]?.[tableSort.id]] ?? 4;
            return tableSort.dir === 'asc' ? ga - gb : gb - ga;
        });
    }

    // ── Build header ──
    let headHTML = '<tr><th style="cursor:default;">Community</th>';
    sortedInds.forEach(ind => {
        const cap   = capitalOf(ind);
        const label = indicatorMetadata[ind]?.label || ind;
        let arrow = '';
        if (tableSort.type === 'indicator' && tableSort.id === ind) arrow = tableSort.dir === 'asc' ? ' ▲' : ' ▼';
        const sortedClass = (tableSort.type === 'indicator' && tableSort.id === ind) ? ' th-sorted' : '';
        headHTML += `<th class="cap-${cap}${sortedClass}" title="${ind}: ${label}" onclick="sortTable('${ind}', 'indicator')">${ind}${arrow}</th>`;
    });
    headHTML += '</tr>';
    thead.innerHTML = headHTML;

    // ── Build body rows ──
    let bodyHTML = '';
    sortedComms.forEach(comm => {
        let arrow = '';
        if (tableSort.type === 'community' && tableSort.id === comm) arrow = tableSort.dir === 'asc' ? ' ▶' : ' ◀';
        const sortedClass = (tableSort.type === 'community' && tableSort.id === comm) ? 'tr-sorted' : '';
        
        bodyHTML += `<tr class="${sortedClass}"><td title="${comm}" onclick="sortTable('${comm}', 'community')">${comm}${arrow}</td>`;
        sortedInds.forEach(ind => {
            const grade = data[comm]?.[ind];
            if (grade && colors[grade]) {
                bodyHTML += `<td class="grade-${grade}" title="${comm} – ${ind}: ${grade}">${grade}</td>`;
            } else {
                bodyHTML += `<td class="grade-na"></td>`;
            }
        });
        bodyHTML += '</tr>';
    });
    tbody.innerHTML = bodyHTML;

    // ── Wire hover events via delegation ──────────────────
    // Detach old listener by cloning the table node
    const newTable = table.cloneNode(false);
    newTable.appendChild(thead);
    newTable.appendChild(tbody);
    table.parentNode.replaceChild(newTable, table);

    newTable.addEventListener('mouseover', e => {
        const td = e.target.closest('td, th');
        if (!td) return;
        // Determine column index
        const colIdx = td.cellIndex;
        if (colIdx === 0) { updateTblLabel(null); return; } // community col
        const ind = sortedInds[colIdx - 1]; // Use sortedInds!
        updateTblLabel(ind);
    });
    newTable.addEventListener('mouseleave', () => updateTblLabel(null));
};

// ── Edge Auto-Scroll for Table ─────────────────────────
(function setupTableAutoScroll() {
    const EDGE_ZONE = 0.10;   // 10% of screen width on each side
    const MAX_SPEED = 18;     // max pixels per frame
    let rafId = null;
    let mouseX = -1;

    function getScrollEl() {
        return document.querySelector('.table-scroll-wrapper');
    }

    function scrollStep() {
        const scrollEl = getScrollEl();
        if (!scrollEl || mouseX < 0) { rafId = null; return; }

        const W = window.innerWidth;
        const edgePx = W * EDGE_ZONE;
        let speed = 0;

        if (mouseX > W - edgePx) {
            // Right zone — scroll right
            const ratio = (mouseX - (W - edgePx)) / edgePx; // 0→1
            speed = Math.round(ratio * ratio * MAX_SPEED);   // ease-in curve
        } else if (mouseX < edgePx) {
            // Left zone — scroll left
            const ratio = (edgePx - mouseX) / edgePx;       // 0→1
            speed = -Math.round(ratio * ratio * MAX_SPEED);
        }

        if (speed !== 0) {
            scrollEl.scrollLeft += speed;
            rafId = requestAnimationFrame(scrollStep);
        } else {
            rafId = null;
        }
    }

    function onMouseMove(e) {
        mouseX = e.clientX;
        const scrollEl = getScrollEl();
        // Only auto-scroll when the table-view is actually visible
        if (!scrollEl || document.getElementById('table-view')?.style.display === 'none') return;
        if (!rafId) rafId = requestAnimationFrame(scrollStep);
    }

    function onMouseLeave() {
        mouseX = -1;
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    // Attach to the whole window so the mouse position is always tracked
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
})();

// ── Center Menu Navigation ───────────────────────────
// ── Multi-Screen Navigation ───────────────────────────
window.handleMenuClick = function(btn, viewName) {
    // Clear any existing lines visually when switching tabs
    const linesGroup = document.getElementById('lines-group');
    if (linesGroup) linesGroup.innerHTML = '';
    
    const nextScreenId = `${viewName.toLowerCase()}-screen`;
    
    // Hide Home-specific view switcher when navigating away from Home
    const viewSwitcher = document.getElementById('home-view-switcher');
    if (viewSwitcher) {
        viewSwitcher.style.display = (viewName === 'Home') ? 'flex' : 'none';
    }
    const nextScreen = document.getElementById(nextScreenId);
    const currentScreen = document.querySelector('.app-screen.active');

    if (currentScreen === nextScreen) return;

    // 1. UI Update (Menu Buttons)
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // 2. Coordinated Swipe Transition
    if (currentScreen) {
        // Trigger animations
        currentScreen.classList.remove('active');
        currentScreen.classList.add('slide-out-left');
        
        nextScreen.classList.add('slide-in-right');
        
        // Cleanup after animation completes (600ms)
        setTimeout(() => {
            currentScreen.classList.remove('slide-out-left');
            nextScreen.classList.remove('slide-in-right');
            // Ensure only the correct screen is active
            document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
            nextScreen.classList.add('active');
            console.log("Active screen finalized:", viewName);
        }, 600);
    } else {
        // Initial load or no current screen
        document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
        nextScreen.classList.add('active');
    }

    // 3. Conditional Header UI (Diagram/Table switcher)
    const homeSwitcher = document.getElementById('home-view-switcher');
    if (homeSwitcher) {
        homeSwitcher.style.display = (viewName === 'Home') ? 'flex' : 'none';
    }

    console.log("Navigating to screen:", viewName);
    
    // 4. Initialize specific screen logic if needed
    if (viewName === 'Home') {
        switchView('diagram');
        executeStep(1); // Force reset to landing page state on every return
    } else if (viewName === 'Activities') {
        initActivitiesScreen();
    } else if (viewName === 'Scores') {
        initScoresScreen();
    } else if (viewName === 'Knowledge') {
        initKnowledgeScreen();
    }
};

// ── Activities Screen Logic ────────────────────────────
const actCapitalMeta = {
    'Financial': { color: '#fbbf24', icon: '💰' },
    'Human': { color: '#f87171', icon: '👤' },
    'Natural': { color: '#4ade80', icon: '🌿' },
    'Physical': { color: '#38bdf8', icon: '🏗️' },
    'Social': { color: '#818cf8', icon: '🤝' }
};


let activitiesData = [...SAMPLE_ACTIVITIES];
let activitiesFilters = { hazard: 'All', capital: 'All', search: '' };
let hasStartedActivitiesListeners = false;
let hasFetchedLiveActivities = false;

let scoresFilters = { tab: 'Both', search: '' };
let hasStartedScoresListeners = false;
let scoresDataLive = null;

function initActivitiesScreen() {
    const grid = document.getElementById('activities-grid');
    if (!grid) return;

    if (!hasStartedActivitiesListeners) {
        setupActivitiesListeners();
        hasStartedActivitiesListeners = true;
    }

    // 1. Render immediate (Zero-Latency)
    renderActivities();

    // 2. Fetch live data in the background (Non-blocking)
    if (!hasFetchedLiveActivities) {
        fetchLiveActivities();
    }
}

async function fetchLiveActivities() {
    hasFetchedLiveActivities = true;

    // Adapt app.js fetch logic
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQtfsyAnl5GL1buHmzh5Pn4h-m8TgbIl0mE6FmvyRPpsvZGqw1aWYWnZ_Fo9wNBtg/pub?gid=1814434584&single=true&output=csv';
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(SHEET_URL)}`;

    try {
        const response = await fetch(proxyUrl);
        const text = await response.text();
        const lines = text.trim().split(/\r?\n/).slice(1);
        
        const fetchedData = lines.map(line => {
            const parts = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); // Robust CSV split
            const code = parts[0]?.replace(/"/g, '').trim() || 'N/A';
            const name = parts[1]?.replace(/"/g, '').trim() || 'N/A';
            return {
                name: name,
                year: "N/A",
                date: "Ongoing",
                indicators: [code],
                hazards: [(parts[3] || 'Generic').replace(/"/g, '').trim()],
                communities: ["Multiple Communities"], 
                capitals: [(parts[2] || 'Generic').replace(/"/g, '').trim()]
            };
        }).filter(item => item.name !== 'N/A');

        activitiesData = [...SAMPLE_ACTIVITIES, ...fetchedData];
        renderActivities();
    } catch (err) {
        console.warn("Failed to fetch live activities, using sample data only:", err);
        // Data already in activitiesData from init
    }
}

function setupActivitiesListeners() {
    const search = document.getElementById('act-search');
    if (search) {
        search.oninput = (e) => {
            activitiesFilters.search = e.target.value;
            renderActivities();
        };
    }

    ['hazard', 'capital'].forEach(type => {
        const container = document.getElementById(`act-${type}-filters`);
        if (container) {
            container.onclick = (e) => {
                const btn = e.target.closest('.chip');
                if (!btn) return;
                activitiesFilters[type] = btn.getAttribute(`data-${type}`);
                container.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === btn));
                renderActivities();
            };
        }
    });
}

function deriveCapitalsFromIndicators(indicators) {
    if (!indicators || !Array.isArray(indicators)) return [];
    
    const capitalMap = {
        'F': 'Financial',
        'H': 'Human',
        'N': 'Natural',
        'P': 'Physical',
        'S': 'Social'
    };

    const caps = new Set();
    indicators.forEach(ind => {
        const firstChar = (ind || '').charAt(0).toUpperCase();
        if (capitalMap[firstChar]) {
            caps.add(capitalMap[firstChar]);
        }
    });

    return Array.from(caps);
}

function renderActivities() {
    const grid = document.getElementById('activities-grid');
    const noRes = document.getElementById('act-no-results');
    if (!grid) return;

    const query = activitiesFilters.search.toLowerCase();

    const filtered = activitiesData.filter(item => {
        // AUTOMATICALLY derive capitals from indicators to fix tagging errors
        item.capitals = deriveCapitalsFromIndicators(item.indicators);

        // Multi-Hazard Filter Check
        const matchHazard = activitiesFilters.hazard === 'All'
            || (activitiesFilters.hazard === 'Multi'
                ? (item.hazards && (item.hazards.includes('Multi') || (item.hazards.includes('Flood') && item.hazards.includes('Heat'))))
                : (item.hazards && item.hazards.includes(activitiesFilters.hazard)));
        // Capital Filter Check
        const matchCapital = activitiesFilters.capital === 'All' || (item.capitals && item.capitals.includes(activitiesFilters.capital));
        
        // Multi-Field Search logic (Not Case Sensitive)
        const matchSearch = !query || 
            (item.name && item.name.toLowerCase().includes(query)) ||
            (item.year && item.year.toLowerCase().includes(query)) ||
            (item.date && item.date.toLowerCase().includes(query)) ||
            (item.capitals && item.capitals.some(c => c.toLowerCase().includes(query))) ||
            (item.hazards && item.hazards.some(h => h.toLowerCase().includes(query))) ||
            (item.indicators && item.indicators.some(i => i.toLowerCase().includes(query))) ||
            (item.communities && item.communities.some(c => c.toLowerCase().includes(query)));

        return matchHazard && matchCapital && matchSearch;
    });

    grid.innerHTML = '';
    noRes.classList.toggle('hidden', filtered.length > 0);

    filtered.forEach((item, i) => {
        // Redrive capitals just in case it wasn't captured in the filter loop
        item.capitals = deriveCapitalsFromIndicators(item.indicators);
        const meta = actCapitalMeta[item.capitals[0]] || { color: '#aaa', icon: '📄' };
        
        // Extract quarters from breakdown or use date as fallback
        let quarters = [];
        if (item.breakdown && item.breakdown.length > 0) {
            quarters = [...new Set(item.breakdown.map(b => b.quarter).filter(q => q))];
        }
        if (quarters.length === 0 && item.date && item.date !== 'Ongoing') {
            quarters = [item.date];
        }
        const quarterText = quarters.length > 0 ? quarters.join(', ') : (item.date || 'Ongoing');

        const card = document.createElement('div');
        card.className = 'act-card';
        card.style.setProperty('--accent', meta.color);
        card.style.animationDelay = `${i * 0.03}s`;
        card.style.cursor = 'pointer';
        card.onclick = () => openActivityModal(item);
        
        card.innerHTML = `
            <div class="act-header">
                <div class="act-tags" title="Quarters: ${quarterText}">
                   <span class="act-date-badge">${quarterText}</span>
                </div>
                <div class="act-hazard-tags" title="Hazards: ${item.hazards.join(', ')}">
                    ${item.hazards.map(h => `<span class="act-hazard ${h}">${h}</span>`).join('')}
                </div>
            </div>
            <h3 class="act-title">${item.name}</h3>
            <div class="act-indicator-tags" title="Indicators: ${item.indicators.join(', ')}">
                ${item.indicators.map(ind => `<span class="ind-tag">${ind}</span>`).join('')}
            </div>
            <div class="act-communities-list">
                <span class="icon">📍</span>
                <span class="comm-text" title="Communities: ${item.communities.join(', ')}">${item.communities.join(', ')}</span>
            </div>
            ${item.hasKnowledge ? `<div class="act-knowledge-tag"><span>📖</span> Knowledge Available</div>` : ''}
            <div class="act-footer" title="Capitals: ${item.capitals.join(', ')}">
                ${item.capitals.map(cap => {
                    const cMeta = actCapitalMeta[cap] || { icon: '📄' };
                    return `<span style="display:inline-flex; align-items:center; gap:4px;">${cMeta.icon} ${cap}</span>`;
                }).join('<span style="opacity:0.3; margin:0 6px;">•</span>')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function openActivityModal(item) {
    const modal = document.getElementById('activity-modal');
    const body = document.getElementById('activity-modal-body');
    if (!modal || !body) return;

    let breakdownHTML = '';
    if (item.breakdown && item.breakdown.length > 0) {
        breakdownHTML = `
            <h3 style="margin: 20px 0 10px 0; font-size: 1.1rem; color: #aaa;">Outreach Breakdown</h3>
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Quarter</th>
                        <th>Communities Executed</th>
                        <th>Old Participants</th>
                        <th>New Participants</th>
                        <th>Total Reach (New)</th>
                    </tr>
                </thead>
                <tbody>
                    ${item.breakdown.map(b => {
                        const totalNew = (b.newMen || 0) + (b.newWomen || 0);
                        return `
                            <tr>
                                <td>${b.quarter || '-'}</td>
                                <td>${(b.communities || []).join(', ') || '-'}</td>
                                <td><span style="opacity:0.8">${b.oldMen}♂ / ${b.oldWomen}♀</span></td>
                                <td><span style="color:#00e676;">${b.newMen}♂ / ${b.newWomen}♀</span></td>
                                <td style="font-weight:bold; color:#fff;">${totalNew}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    body.innerHTML = `
        <h2 style="color: #00e676;">${item.name}</h2>
        <div class="modal-detail-row"><strong>Target Indicators:</strong> ${item.indicators.join(', ')}</div>
        <div class="modal-detail-row"><strong>Primary Hazards:</strong> ${item.hazards.join(', ')}</div>
        <div class="modal-detail-row"><strong>Associated Capitals:</strong> ${item.capitals.join(', ')}</div>
        ${item.hasKnowledge ? `<div class="modal-detail-row" style="margin-bottom: 15px;"><strong>Knowledge Product:</strong> <span style="color:#00e676;">Yes, related research is available</span></div>` : ''}
        ${breakdownHTML}
    `;

    modal.classList.add('active');
}

function closeActivityModal(event) {
    // If event is passed (click on overlay), check if the target is exactly the overlay and not the content box
    if (event && event.target !== document.getElementById('activity-modal')) {
        return; 
    }
    const modal = document.getElementById('activity-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}


// ── Scores Screen Logic ────────────────────────────────
function initScoresScreen() {
    const grid = document.getElementById('scores-grid');
    if (!grid) return;

    if (!hasStartedScoresListeners) {
        setupScoresListeners();
        hasStartedScoresListeners = true;
    }

    // Use static JS data directly to avoid CORS issues
    if (window.SCORES_DATA) {
        scoresDataLive = window.SCORES_DATA;
    }
    
    renderScores();
}



function setupScoresListeners() {
    const search = document.getElementById('score-search');
    if (search) {
        search.oninput = (e) => {
            scoresFilters.search = e.target.value;
            renderScores();
        };
    }

    const container = document.getElementById('score-hazard-filters');
    if (container) {
        container.onclick = (e) => {
            const btn = e.target.closest('.chip');
            if (!btn) return;
            scoresFilters.tab = btn.getAttribute('data-tab');
            container.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === btn));
            renderScores();
        };
    }
}

function renderScores() {
    const grid = document.getElementById('scores-grid');
    if (!grid) return;

    let itemsToRender = [];
    if (scoresDataLive) {
        itemsToRender = scoresDataLive;
    } else {
        const rawDataRef = window.communitiesDataStaticRaw || (typeof communitiesDataStaticRaw !== 'undefined' ? communitiesDataStaticRaw : null);
        if (rawDataRef && rawDataRef.data) {
            itemsToRender = rawDataRef.data.map(line => {
                const p = line.split(',');
                return { 
                    code: p[0], 
                    name: p[1], 
                    flood: parseFloat(p[7]) || 0,
                    heat: parseFloat(p[9]) || 0,
                    generic: parseFloat(p[11]) || 0 
                };
            });
        }
    }

    const query = scoresFilters.search.toLowerCase();
    const currentTab = scoresFilters.tab;

    const filtered = itemsToRender.filter(item => {
        const matchSearch = !query || item.name.toLowerCase().includes(query);
        
        let matchTab = true;
        if (currentTab === 'Flood') {
            matchTab = (item.flood !== null && item.flood !== undefined);
        } else if (currentTab === 'Heat') {
            matchTab = (item.heat !== null && item.heat !== undefined);
        }
        
        return matchSearch && matchTab;
    });

    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        document.getElementById('score-no-results').classList.remove('hidden');
    } else {
        document.getElementById('score-no-results').classList.add('hidden');
    }

    // Gauge Arc calculation constants
    const getAngle = (val) => (val / 100) * 180 - 90;

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'score-card';
        card.style.cursor = 'pointer';
        card.title = 'Click to see indicator grades';
        card.addEventListener('click', () => openScoreDetailModal(item));

        const showFlood  = (currentTab === 'Both' || currentTab === 'Flood')  && item.flood   != null;
        const showHeat   = (currentTab === 'Both' || currentTab === 'Heat')   && item.heat    != null;
        const showGeneric = item.generic != null;

        const floodAngle   = showFlood   ? getAngle(item.flood)   : 0;
        const heatAngle    = showHeat    ? getAngle(item.heat)    : 0;
        const genericAngle = showGeneric ? getAngle(item.generic) : 0;

        card.innerHTML = `
            <div class="score-card-header">
                <h3>${item.name}</h3>
                <span class="comm-id">ID: ${item.code || 'N/A'}</span>
            </div>

            <div class="score-metrics">
                <div class="gauge-container">
                    <svg viewBox="0 0 100 65" class="gauge-svg">
                        <!-- Background Arcs: Red(0-33), Yellow(33-67), Green(67-100) -->
                        <path class="gauge-arc" d="M 15 55 A 35 35 0 0 1 31 24" stroke="#ff8a80" />
                        <path class="gauge-arc" d="M 31 24 A 35 35 0 0 1 69 24" stroke="#ffd54f" />
                        <path class="gauge-arc" d="M 69 24 A 35 35 0 0 1 85 55" stroke="#69f0ae" />

                        <!-- Needles -->
                        ${showFlood   ? `<line class="gauge-needle needle-flood"   x1="50" y1="55" x2="50" y2="20" style="transform-box:fill-box; transform-origin:50% 100%; transform:rotate(${floodAngle}deg)" />` : ''}
                        ${showHeat    ? `<line class="gauge-needle needle-heat"    x1="50" y1="55" x2="50" y2="20" style="transform-box:fill-box; transform-origin:50% 100%; transform:rotate(${heatAngle}deg)" />` : ''}
                        ${showGeneric ? `<line class="gauge-needle needle-generic" x1="50" y1="55" x2="50" y2="20" style="transform-box:fill-box; transform-origin:50% 100%; transform:rotate(${genericAngle}deg)" />` : ''}

                        <circle cx="50" cy="55" r="3" fill="#2a2a35" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>
                    </svg>
                </div>

                <div class="score-legend">
                    ${showFlood   ? `<div class="legend-item val-flood"><span class="legend-dot">●</span><span class="legend-label">Flood</span><span class="legend-val">${item.flood}</span></div>`   : ''}
                    ${showHeat    ? `<div class="legend-item val-heat"><span class="legend-dot">●</span><span class="legend-label">Heat</span><span class="legend-val">${item.heat}</span></div>`     : ''}
                    ${showGeneric ? `<div class="legend-item val-generic"><span class="legend-dot">●</span><span class="legend-label">Generic</span><span class="legend-val">${item.generic}</span></div>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}


window.openScoreDetailModal = function(item) {
    const modal = document.getElementById('score-detail-modal');
    const body  = document.getElementById('score-detail-modal-body');
    if (!modal || !body) return;

    // Store for re-render on sort change
    window._scoreDetailItem = item;
    window._scoreDetailSort = 'default';

    const commData = (typeof data !== 'undefined' && data) ? data[item.name] : null;
    const indList  = (typeof indicators !== 'undefined') ? indicators : [];

    const gradeColors = { A: '#00e676', B: '#ffea00', C: '#ff9100', D: '#ff1744' };
    const gradeLabels = { A: 'High Resilience', B: 'Moderate', C: 'At Risk', D: 'Critical' };
    const gradeOrder  = { A: 0, B: 1, C: 2, D: 3 };

    const totalInds = indList.length;
    const gradeCounts = { A: 0, B: 0, C: 0, D: 0 };
    if (commData) {
        indList.forEach(ind => {
            const g = commData[ind];
            if (g && gradeCounts[g] !== undefined) gradeCounts[g]++;
        });
    }

    // Make summary boxes clickable to sort by that grade
    const summaryHTML = `
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;">
            ${['A','B','C','D'].map(g => `
                <div onclick="window._renderScoreDetailTable('grade-${g}')"
                     style="flex:1;min-width:60px;background:rgba(255,255,255,0.04);border:1px solid ${gradeColors[g]};border-radius:10px;padding:8px 10px;text-align:center;cursor:pointer;transition:all 0.2s;"
                     onmouseover="this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.background='rgba(255,255,255,0.04)'">
                    <div style="font-size:1.3rem;font-weight:800;color:${gradeColors[g]};">${gradeCounts[g]}</div>
                    <div style="font-size:0.6rem;color:${gradeColors[g]};font-weight:700;">${g}</div>
                    <div style="font-size:0.55rem;color:#777;margin-top:2px;">${gradeLabels[g]}</div>
                </div>`).join('')}
        </div>`;

    const noDataNote = !commData
        ? `<div style="color:#888;font-size:0.85rem;margin-bottom:16px;">⚠️ No indicator grading data found for this community.</div>`
        : '';

    // Sort toolbar
    const sortBarHTML = `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
            <span style="font-size:0.68rem;color:#666;text-transform:uppercase;letter-spacing:0.6px;margin-right:4px;">Sort:</span>
            <button id="sdsort-default" onclick="window._renderScoreDetailTable('default')"
                style="background:#00e676;color:#121212;border:none;border-radius:6px;padding:4px 12px;font-size:0.72rem;font-weight:700;cursor:pointer;">⊞ By Capital</button>
            <button id="sdsort-asc" onclick="window._renderScoreDetailTable('asc')"
                style="background:rgba(255,255,255,0.06);color:#aaa;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:4px 12px;font-size:0.72rem;font-weight:700;cursor:pointer;">▲ Best First</button>
            <button id="sdsort-desc" onclick="window._renderScoreDetailTable('desc')"
                style="background:rgba(255,255,255,0.06);color:#aaa;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:4px 12px;font-size:0.72rem;font-weight:700;cursor:pointer;">▼ Worst First</button>
        </div>`;

    // Count related activities & knowledge for tab badges
    const allActs = (typeof activitiesData !== 'undefined') ? activitiesData : [];
    const commActs = allActs.filter(a => a.communities && a.communities.includes(item.name));
    const commKnow = commActs.filter(a => a.hasKnowledge);

    body.innerHTML = `
        <h2 style="color:#00e676;margin:0 0 4px 0;font-size:1.3rem;">${item.name}</h2>
        <div style="color:#888;font-size:0.78rem;margin-bottom:14px;">ID: ${item.code || 'N/A'} &nbsp;·&nbsp; ${totalInds} indicators</div>
        ${noDataNote}
        ${summaryHTML}

        <!-- Tab bar -->
        <div id="sd-tabs" style="display:flex;gap:0;border-bottom:2px solid rgba(255,255,255,0.08);margin-bottom:14px;">
            <button id="sdtab-indicators" onclick="window._switchScoreTab('indicators')"
                style="background:transparent;border:none;border-bottom:2px solid #00e676;margin-bottom:-2px;color:#00e676;padding:8px 16px;font-size:0.78rem;font-weight:700;cursor:pointer;letter-spacing:0.3px;">⊞ Indicators</button>
            <button id="sdtab-activities" onclick="window._switchScoreTab('activities')"
                style="background:transparent;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;color:#666;padding:8px 16px;font-size:0.78rem;font-weight:700;cursor:pointer;letter-spacing:0.3px;">⚡ Activities <span style="background:rgba(255,255,255,0.08);border-radius:10px;padding:1px 7px;font-size:0.68rem;">${commActs.length}</span></button>
            <button id="sdtab-knowledge" onclick="window._switchScoreTab('knowledge')"
                style="background:transparent;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;color:#666;padding:8px 16px;font-size:0.78rem;font-weight:700;cursor:pointer;letter-spacing:0.3px;">📖 Knowledge <span style="background:rgba(255,255,255,0.08);border-radius:10px;padding:1px 7px;font-size:0.68rem;">${commKnow.length}</span></button>
        </div>

        <!-- Tab content -->
        <div id="score-detail-tab-content">
            <!-- Indicators sub-content -->
            <div id="sdpane-indicators">
                ${sortBarHTML}
                <div id="score-detail-table"></div>
            </div>
            <div id="sdpane-activities" style="display:none;"></div>
            <div id="sdpane-knowledge"  style="display:none;"></div>
        </div>
    `;

    window._renderScoreDetailTable('default');
    modal.classList.add('active');
};

window._switchScoreTab = function(tab) {
    ['indicators','activities','knowledge'].forEach(t => {
        const btn  = document.getElementById('sdtab-' + t);
        const pane = document.getElementById('sdpane-' + t);
        const isActive = t === tab;
        if (btn)  { btn.style.color  = isActive ? '#00e676' : '#666'; btn.style.borderBottomColor = isActive ? '#00e676' : 'transparent'; }
        if (pane) pane.style.display = isActive ? '' : 'none';
    });
    if (tab === 'activities') window._renderScoreActivitiesTab();
    if (tab === 'knowledge')  window._renderScoreKnowledgeTab();
};

window._renderScoreActivitiesTab = function() {
    const pane = document.getElementById('sdpane-activities');
    if (!pane || pane.dataset.loaded) return;
    pane.dataset.loaded = '1';

    const item     = window._scoreDetailItem;
    const commName = item.name;
    const allActs  = (typeof activitiesData !== 'undefined') ? activitiesData : [];
    const commActs = allActs.filter(a => a.communities && a.communities.includes(commName));

    if (commActs.length === 0) {
        pane.innerHTML = '<div style="color:#666;font-size:0.85rem;padding:20px 0;">No activities recorded for this community.</div>';
        return;
    }

    const hazardBg = { Flood: '#3b82f6', Heat: '#ef4444', Multi: '#a855f7', Others: '#f59e0b', Generic: '#6b7280' };

    pane.innerHTML = commActs.map((act, idx) => {
        act.capitals = (typeof deriveCapitalsFromIndicators === 'function') ? deriveCapitalsFromIndicators(act.indicators) : (act.capitals || []);
        const meta = (typeof actCapitalMeta !== 'undefined' && actCapitalMeta[act.capitals[0]]) || { color: '#aaa' };

        // Filter breakdown to only entries covering this community
        const commBreakdown = (act.breakdown || []).filter(b =>
            b.communities && b.communities.includes(commName)
        );

        // Period label: from community-specific breakdown or fall back to activity date
        const periods = commBreakdown.length > 0
            ? [...new Set(commBreakdown.map(b => b.quarter).filter(q => q))]
            : (act.date ? [act.date] : []);
        const periodText = periods.join(', ') || act.date || 'Ongoing';

        // Build reach table rows for this community only
        let reachTableHTML = '';
        if (commBreakdown.length > 0) {
            const totalOld = commBreakdown.reduce((s, b) => s + (b.oldMen || 0) + (b.oldWomen || 0), 0);
            const totalNew = commBreakdown.reduce((s, b) => s + (b.newMen || 0) + (b.newWomen || 0), 0);

            reachTableHTML = `
                <table style="width:100%;border-collapse:collapse;font-size:0.78rem;margin-top:10px;">
                    <thead>
                        <tr style="color:#555;font-size:0.65rem;text-transform:uppercase;letter-spacing:0.4px;border-bottom:1px solid rgba(255,255,255,0.08);">
                            <th style="text-align:left;padding:5px 8px;">Quarter</th>
                            <th style="text-align:center;padding:5px 8px;">Old&nbsp;♂</th>
                            <th style="text-align:center;padding:5px 8px;">Old&nbsp;♀</th>
                            <th style="text-align:center;padding:5px 8px;">New&nbsp;♂</th>
                            <th style="text-align:center;padding:5px 8px;">New&nbsp;♀</th>
                            <th style="text-align:center;padding:5px 8px;color:#00e676;">Total&nbsp;New</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${commBreakdown.map(b => {
                            const rowNew = (b.newMen || 0) + (b.newWomen || 0);
                            return `
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.04);"
                                onmouseover="this.style.background='rgba(255,255,255,0.04)'"
                                onmouseout="this.style.background='transparent'">
                                <td style="padding:5px 8px;color:#aaa;">${b.quarter || '—'}</td>
                                <td style="padding:5px 8px;text-align:center;color:#888;">${b.oldMen ?? '—'}</td>
                                <td style="padding:5px 8px;text-align:center;color:#888;">${b.oldWomen ?? '—'}</td>
                                <td style="padding:5px 8px;text-align:center;color:#ddd;">${b.newMen ?? '—'}</td>
                                <td style="padding:5px 8px;text-align:center;color:#ddd;">${b.newWomen ?? '—'}</td>
                                <td style="padding:5px 8px;text-align:center;font-weight:700;color:#00e676;">${rowNew}</td>
                            </tr>`;
                        }).join('')}
                    </tbody>
                    <tfoot>
                        <tr style="border-top:2px solid rgba(255,255,255,0.1);">
                            <td style="padding:6px 8px;font-weight:700;color:#aaa;font-size:0.72rem;">TOTAL</td>
                            <td colspan="3" style="padding:6px 8px;text-align:center;color:#777;font-size:0.72rem;">Old: ${totalOld}</td>
                            <td colspan="2" style="padding:6px 8px;text-align:center;font-weight:800;font-size:0.88rem;color:#00e676;">New: ${totalNew}</td>
                        </tr>
                    </tfoot>
                </table>`;
        } else {
            reachTableHTML = `<div style="color:#666;font-size:0.78rem;margin-top:8px;">No breakdown data for ${commName}.</div>`;
        }

        const cardId = `sd-act-card-${idx}`;
        const detailId = `sd-act-detail-${idx}`;

        return `
        <div id="${cardId}"
            style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-left:3px solid ${meta.color};border-radius:10px;margin-bottom:10px;overflow:hidden;transition:all 0.2s;">

            <!-- Card header — clickable to expand -->
            <div onclick="window._toggleScoreActivity('${cardId}','${detailId}')"
                style="padding:12px 14px;cursor:pointer;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;"
                onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'">
                <div style="flex:1;min-width:0;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                        <span style="font-size:0.82rem;font-weight:600;color:#fff;line-height:1.3;">${act.name}</span>
                        <span style="font-size:0.68rem;color:#888;white-space:nowrap;margin-left:8px;">${periodText}</span>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:4px;">
                        ${act.hazards.map(h => `<span style="background:${hazardBg[h]||'#555'};color:#fff;font-size:0.65rem;font-weight:700;padding:2px 8px;border-radius:10px;">${h}</span>`).join('')}
                        ${act.indicators.map(i => `<span style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:#aaa;font-size:0.63rem;font-weight:600;padding:1px 6px;border-radius:4px;font-family:monospace;">${i}</span>`).join('')}
                    </div>
                    ${act.hasKnowledge ? '<span style="font-size:0.65rem;color:#00e676;font-weight:700;">📖 Knowledge Available</span>' : ''}
                </div>
                <!-- Chevron -->
                <span id="${detailId}-chevron" style="color:#555;font-size:1rem;flex-shrink:0;margin-top:2px;transition:transform 0.2s;">▼</span>
            </div>

            <!-- Expandable reach detail (hidden by default) -->
            <div id="${detailId}" style="display:none;padding:0 14px 14px 14px;border-top:1px solid rgba(255,255,255,0.06);">
                <div style="font-size:0.65rem;font-weight:700;color:#00e676;text-transform:uppercase;letter-spacing:0.7px;margin:10px 0 4px 0;">
                    Reach for <span style="color:#fff;">${commName}</span>
                </div>
                ${reachTableHTML}
            </div>
        </div>`;
    }).join('');
};

window._toggleScoreActivity = function(cardId, detailId) {
    const detail  = document.getElementById(detailId);
    const chevron = document.getElementById(detailId + '-chevron');
    if (!detail) return;
    const isOpen = detail.style.display !== 'none';
    detail.style.display  = isOpen ? 'none' : '';
    if (chevron) {
        chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
        chevron.style.color     = isOpen ? '#555' : '#00e676';
    }
};

window._renderScoreKnowledgeTab = function() {
    const pane = document.getElementById('sdpane-knowledge');
    if (!pane || pane.dataset.loaded) return;
    pane.dataset.loaded = '1';

    const item     = window._scoreDetailItem;
    const commName = item.name;
    const allActs  = (typeof activitiesData !== 'undefined') ? activitiesData : [];
    const commKnow = allActs.filter(a => a.communities && a.communities.includes(commName) && a.hasKnowledge);

    if (commKnow.length === 0) {
        pane.innerHTML = '<div style="color:#666;font-size:0.85rem;padding:20px 0;">No knowledge products recorded for this community.</div>';
        return;
    }

    const capitalIcons2 = { Financial: '💰', Human: '👤', Natural: '🌿', Physical: '🏗️', Social: '🤝' };
    const hazardColors  = { Generic: '#888', Flood: '#38bdf8', Heatwave: '#fb923c' };

    pane.innerHTML = commKnow.map((act, idx) => {
        act.capitals = (typeof deriveCapitalsFromIndicators === 'function') ? deriveCapitalsFromIndicators(act.indicators) : (act.capitals || []);
        const primaryCapital = act.capitals[0] || 'Unknown';
        const icon = capitalIcons2[primaryCapital] || '📄';
        const meta = (typeof actCapitalMeta !== 'undefined' && actCapitalMeta[primaryCapital]) || { color: '#aaa' };

        const publishedYear = act.date || act.year || '—';
        const indicators    = (act.indicators || []).join(', ') || '—';
        const capitals      = (act.capitals   || []).join(', ') || '—';
        const communities   = (act.communities || []).join(', ') || '—';
        const description   = act.description ||
            `Knowledge product generated from activities across ${communities}, focusing on ${(act.hazards||[]).join(', ')} hazard resilience. Covers indicators: ${indicators}.`;
        const fileUrl       = act.fileUrl || null;

        const cardId   = `sd-know-card-${idx}`;
        const detailId = `sd-know-detail-${idx}`;

        // Hazard pill badges
        const hazardPills = (act.hazards || []).map(h =>
            `<span style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:#ccc;font-size:0.63rem;font-weight:600;padding:2px 8px;border-radius:10px;">${h}</span>`
        ).join('');

        return `
        <div id="${cardId}"
            style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-left:3px solid ${meta.color};border-radius:10px;margin-bottom:10px;overflow:hidden;transition:all 0.2s;">

            <!-- Card header — clickable to expand -->
            <div onclick="window._toggleScoreKnowledge('${cardId}','${detailId}')"
                style="padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:10px;"
                onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'">
                <span style="font-size:1.4rem;flex-shrink:0;">${icon}</span>
                <div style="flex:1;min-width:0;">
                    <div style="font-size:0.82rem;font-weight:600;color:#fff;line-height:1.3;margin-bottom:3px;">${act.name}</div>
                    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;">
                        <span style="background:rgba(0,230,118,0.12);border:1px solid rgba(0,230,118,0.3);color:#00e676;font-size:0.63rem;font-weight:700;padding:1px 8px;border-radius:10px;">📅 ${publishedYear}</span>
                        <span style="font-size:0.65rem;color:#777;">${primaryCapital} Report</span>
                        ${hazardPills}
                    </div>
                </div>
                <!-- Chevron -->
                <span id="${detailId}-chevron" style="color:#555;font-size:1rem;flex-shrink:0;transition:transform 0.2s;">▼</span>
            </div>

            <!-- Expandable detail panel (hidden by default) -->
            <div id="${detailId}" style="display:none;padding:0 14px 14px 14px;border-top:1px solid rgba(255,255,255,0.06);">
                <!-- Meta rows -->
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;margin:12px 0 10px 0;font-size:0.78rem;">
                    <div><span style="color:#666;">Indicators:</span> <span style="color:#ddd;">${indicators}</span></div>
                    <div><span style="color:#666;">Capitals:</span> <span style="color:#ddd;">${capitals}</span></div>
                    <div style="grid-column:1/-1;"><span style="color:#666;">Communities:</span> <span style="color:#ddd;">${communities}</span></div>
                </div>

                <!-- Description -->
                <div style="font-size:0.65rem;font-weight:700;color:#00e676;text-transform:uppercase;letter-spacing:0.7px;margin-bottom:5px;">Description</div>
                <p style="color:#ccc;font-size:0.78rem;line-height:1.6;margin:0 0 12px 0;background:rgba(255,255,255,0.02);border-left:2px solid rgba(0,230,118,0.35);padding:8px 10px;border-radius:0 6px 6px 0;">${description}</p>

                <!-- File link -->
                ${fileUrl
                    ? `<a href="${fileUrl}" target="_blank" rel="noopener"
                          style="display:inline-flex;align-items:center;gap:6px;background:#00e676;color:#121212;font-weight:700;font-size:0.78rem;padding:7px 16px;border-radius:7px;text-decoration:none;transition:opacity 0.2s;"
                          onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">📄 Open Document</a>`
                    : `<span style="color:#444;font-size:0.75rem;">📄 No file link available.</span>`
                }
            </div>
        </div>`;
    }).join('');
};

window._toggleScoreKnowledge = function(cardId, detailId) {
    const detail  = document.getElementById(detailId);
    const chevron = document.getElementById(detailId + '-chevron');
    if (!detail) return;
    const isOpen = detail.style.display !== 'none';
    detail.style.display  = isOpen ? 'none' : '';
    if (chevron) {
        chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
        chevron.style.color     = isOpen ? '#555' : '#00e676';
    }
};

window._renderScoreDetailTable = function(sortMode) {
    const tableEl = document.getElementById('score-detail-table');
    if (!tableEl) return;

    const item     = window._scoreDetailItem;
    if (!item) return;

    window._scoreDetailSort = sortMode;

    // Update sort button styles
    ['default','asc','desc'].forEach(k => {
        const btn = document.getElementById('sdsort-' + k);
        if (!btn) return;
        const isActive = (k === sortMode) ||
            (sortMode && sortMode.startsWith('grade-') && k === 'default');
        btn.style.background     = isActive ? '#00e676' : 'rgba(255,255,255,0.06)';
        btn.style.color          = isActive ? '#121212' : '#aaa';
        btn.style.border         = isActive ? 'none'    : '1px solid rgba(255,255,255,0.12)';
    });
    // If filtering by a specific grade, highlight "By Capital" as inactive
    if (sortMode && sortMode.startsWith('grade-')) {
        const btn = document.getElementById('sdsort-default');
        if (btn) { btn.style.background = 'rgba(255,255,255,0.06)'; btn.style.color = '#aaa'; btn.style.border = '1px solid rgba(255,255,255,0.12)'; }
    }

    const commData  = (typeof data !== 'undefined' && data) ? data[item.name] : null;
    const indList   = (typeof indicators !== 'undefined') ? indicators : [];
    
    // Sync with global colors (A: #00e676, B: #ffeb3b, C: #ff9800, D: #ff1744)
    const gradeColors = { A: '#00e676', B: '#ffeb3b', C: '#ff9800', D: '#ff1744' };
    const gradeOrder  = { A: 0, B: 1, C: 2, D: 3 };
    const capitalIcons = { Financial: '💰', Human: '👤', Natural: '🌿', Physical: '🏗️', Social: '🤝' };
    const hazardColors = { Generic: '#888', Flood: '#38bdf8', Heatwave: '#fb923c' };

    function rowHTML(ind, meta) {
        const grade  = commData ? (commData[ind] || '—') : '—';
        let color    = gradeColors[grade] || '#555';
        
        // Light mode legibility fix for Grade B (Yellow -> Amber)
        if (grade === 'B' && document.body.classList.contains('light')) {
            color = '#b07800'; 
        }

        const hazard = meta ? meta.hazard : '';
        const hColor = hazardColors[hazard] || '#888';
        const label  = meta ? meta.label : ind;
        return `
            <tr style="border-bottom:1px solid rgba(255,255,255,0.04);"
                onmouseover="this.style.background='rgba(255,255,255,0.04)'"
                onmouseout="this.style.background='transparent'">
                <td style="padding:5px 8px;color:#aaa;font-family:monospace;font-size:0.78rem;">${ind}</td>
                <td style="padding:5px 8px;color:#ddd;line-height:1.3;">${label}</td>
                <td style="padding:5px 8px;text-align:center;"><span style="font-size:0.65rem;font-weight:700;color:${hColor};">${hazard || '—'}</span></td>
                <td style="padding:5px 8px;text-align:center;">
                    <span style="display:inline-block;min-width:28px;font-weight:800;font-size:0.95rem;color:${color}">${grade}</span>
                </td>
            </tr>`;
    }

    const tableHead = `
        <table style="width:100%;border-collapse:collapse;font-size:0.83rem;">
            <thead>
                <tr style="color:#555;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.4px;">
                    <th style="text-align:left;padding:4px 8px;width:52px;">Code</th>
                    <th style="text-align:left;padding:4px 8px;">Indicator</th>
                    <th style="text-align:center;padding:4px 8px;width:60px;">Hazard</th>
                    <th style="text-align:center;padding:4px 8px;width:48px;cursor:pointer;"
                        onclick="window._renderScoreDetailTable(window._scoreDetailSort==='asc'?'desc':'asc')"
                        title="Click to toggle sort">
                        Grade ⇅
                    </th>
                </tr>
            </thead>
            <tbody>`;

    let html = '';

    if (sortMode === 'default') {
        // Grouped by capital
        const capitalGroups = {};
        indList.forEach(ind => {
            const meta    = (typeof indicatorMetadata !== 'undefined') ? indicatorMetadata[ind] : null;
            const capital = meta ? meta.capital : 'Other';
            if (!capitalGroups[capital]) capitalGroups[capital] = [];
            capitalGroups[capital].push({ ind, meta });
        });

        Object.entries(capitalGroups).forEach(([capital, inds]) => {
            html += `
                <div style="margin-bottom:16px;">
                    <div style="font-size:0.7rem;font-weight:700;color:#00e676;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid rgba(0,230,118,0.15);padding-bottom:5px;margin-bottom:8px;">
                        ${capitalIcons[capital] || '📄'} ${capital} Capital
                    </div>
                    ${tableHead}
                        ${inds.map(({ ind, meta }) => rowHTML(ind, meta)).join('')}
                    </tbody></table>
                </div>`;
        });

    } else if (sortMode === 'asc' || sortMode === 'desc') {
        // Flat list sorted by grade
        const allInds = indList.map(ind => ({
            ind,
            meta: (typeof indicatorMetadata !== 'undefined') ? indicatorMetadata[ind] : null,
            grade: commData ? (commData[ind] || '—') : '—'
        }));

        allInds.sort((a, b) => {
            const ga = gradeOrder[a.grade] ?? 99;
            const gb = gradeOrder[b.grade] ?? 99;
            return sortMode === 'asc' ? ga - gb : gb - ga;
        });

        const label = sortMode === 'asc'
            ? '▲ Sorted: Best → Worst'
            : '▼ Sorted: Worst → Best';

        html = `
            <div style="margin-bottom:16px;">
                <div style="font-size:0.68rem;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:8px;">${label}</div>
                ${tableHead}
                    ${allInds.map(({ ind, meta }) => rowHTML(ind, meta)).join('')}
                </tbody></table>
            </div>`;

    } else if (sortMode && sortMode.startsWith('grade-')) {
        // Filter to a specific grade
        const targetGrade = sortMode.replace('grade-','');
        const gradeColors2 = { A: '#00e676', B: '#ffea00', C: '#ff9100', D: '#ff1744' };
        const filtered = indList
            .map(ind => ({
                ind,
                meta: (typeof indicatorMetadata !== 'undefined') ? indicatorMetadata[ind] : null,
                grade: commData ? (commData[ind] || '—') : '—'
            }))
            .filter(r => r.grade === targetGrade);

        const btnStyle = `background:${gradeColors2[targetGrade]};color:#121212;border:none;border-radius:6px;padding:3px 10px;font-size:0.72rem;font-weight:700;cursor:pointer;margin-left:6px;`;
        html = `
            <div style="margin-bottom:16px;">
                <div style="font-size:0.68rem;font-weight:700;color:${gradeColors2[targetGrade]};text-transform:uppercase;letter-spacing:0.6px;margin-bottom:8px;">
                    Showing Grade ${targetGrade} — ${filtered.length} indicator${filtered.length !== 1 ? 's' : ''}
                    <button onclick="window._renderScoreDetailTable('default')" style="${btnStyle}">✕ Clear</button>
                </div>
                ${filtered.length ? tableHead + filtered.map(({ ind, meta }) => rowHTML(ind, meta)).join('') + '</tbody></table>' : '<div style="color:#666;font-size:0.85rem;">No indicators with this grade.</div>'}
            </div>`;
    }

    tableEl.innerHTML = html || '<div style="color:#666;">No indicators available.</div>';
};

window.closeScoreDetailModal = function(event) {
    if (event && event.target !== document.getElementById('score-detail-modal')) return;
    const modal = document.getElementById('score-detail-modal');
    if (modal) modal.classList.remove('active');
};

// ── Knowledge Screen Logic ────────────────────────────
let knowledgeAllItems = [];

function initKnowledgeScreen() {
    const grid = document.getElementById('knowledge-grid');
    if (!grid) return;

    // Build items list once
    knowledgeAllItems = (window.activitiesData || SAMPLE_ACTIVITIES).filter(act => act.hasKnowledge);

    // Attach search listener (only once)
    const searchInput = document.getElementById('know-search');
    if (searchInput && !searchInput.dataset.bound) {
        searchInput.dataset.bound = '1';
        searchInput.oninput = () => renderKnowledge(searchInput.value.trim().toLowerCase());
    }

    renderKnowledge('');
}

function renderKnowledge(query) {
    const grid = document.getElementById('knowledge-grid');
    const noRes = document.getElementById('know-no-results');
    if (!grid) return;

    const filtered = knowledgeAllItems.filter(act => {
        if (!query) return true;
        return (
            (act.name  && act.name.toLowerCase().includes(query)) ||
            (act.hazards  && act.hazards.some(h => h.toLowerCase().includes(query))) ||
            (act.capitals && act.capitals.some(c => c.toLowerCase().includes(query))) ||
            (act.communities && act.communities.some(c => c.toLowerCase().includes(query))) ||
            (act.indicators  && act.indicators.some(i => i.toLowerCase().includes(query)))
        );
    });

    if (noRes) noRes.classList.toggle('hidden', filtered.length > 0);

    if (filtered.length === 0) {
        grid.innerHTML = '';
        return;
    }

    grid.innerHTML = filtered.map((act, idx) => {
        act.capitals = deriveCapitalsFromIndicators(act.indicators);
        const primaryCapital = act.capitals && act.capitals.length > 0 ? act.capitals[0] : 'Unknown';
        const meta = actCapitalMeta[primaryCapital] || { icon: '📄' };
        const safeIdx = idx;

        return `
        <div class="know-card" style="cursor:pointer;" onclick="openKnowledgeModal(knowledgeAllItems[${safeIdx}])">
            <div class="know-img">${meta.icon}</div>
            <div class="know-body">
                <span class="know-tag">${primaryCapital} Report</span>
                <h3 class="know-title">${act.name}</h3>
                <p class="know-desc">Knowledge product and technical observations generated from executions across ${act.communities.join(', ')} focusing on ${act.hazards.join(', ')} resilience (${act.date || act.year}).</p>
                <div style="margin-top:10px;font-size:11px;color:#00e676;opacity:0.8;">🔍 Click to view details</div>
            </div>
        </div>
        `;
    }).join('');
}


window.openKnowledgeModal = function(act) {
    const modal = document.getElementById('knowledge-modal');
    const body  = document.getElementById('knowledge-modal-body');
    if (!modal || !body || !act) return;

    const publishedYear = act.date || act.year || '—';
    const communities   = (act.communities  || []).join(', ') || '—';
    const indicators    = (act.indicators   || []).join(', ') || '—';
    const hazards       = (act.hazards      || []).join(', ') || '—';
    const capitals      = (act.capitals     || deriveCapitalsFromIndicators(act.indicators || [])).join(', ') || '—';
    const description   = act.description   || `Knowledge product and technical observations generated from activities across ${communities}, focusing on ${hazards} hazard resilience. Covers indicators: ${indicators}.`;
    const fileUrl       = act.fileUrl       || null;

    body.innerHTML = `
        <h2 style="color:#00e676;margin:0 0 6px 0;font-size:1.35rem;line-height:1.3;">${act.name}</h2>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;">
            <span style="background:rgba(0,230,118,0.12);border:1px solid rgba(0,230,118,0.3);color:#00e676;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;">📅 ${publishedYear}</span>
            ${(act.hazards||[]).map(h => `<span style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:#ccc;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;">${h}</span>`).join('')}
        </div>

        <div class="modal-detail-row"><strong>Related Indicators:</strong> ${indicators}</div>
        <div class="modal-detail-row"><strong>Capital Categories:</strong> ${capitals}</div>
        <div class="modal-detail-row"><strong>Communities Covered:</strong> ${communities}</div>

        <div style="margin:16px 0 8px 0;">
            <strong style="color:#00e676;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.8px;">Description</strong>
        </div>
        <p style="color:#ccc;font-size:0.88rem;line-height:1.65;margin:0 0 20px 0;background:rgba(255,255,255,0.03);border-left:3px solid rgba(0,230,118,0.4);padding:10px 14px;border-radius:0 8px 8px 0;">${description}</p>

        <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:16px;">
            ${ fileUrl
                ? `<a href="${fileUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#00e676;color:#121212;font-weight:700;font-size:0.85rem;padding:9px 20px;border-radius:8px;text-decoration:none;transition:opacity 0.2s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">📄 Open Document</a>`
                : `<span style="color:#555;font-size:0.82rem;">📄 No file link available for this knowledge product.</span>`
            }
        </div>
    `;

    modal.classList.add('active');
};

window.closeKnowledgeModal = function(event) {
    if (event && event.target !== document.getElementById('knowledge-modal')) return;
    const modal = document.getElementById('knowledge-modal');
    if (modal) modal.classList.remove('active');
};

// ── Right-Click Interaction Sequence & Long-Press Logic ─────────────────
let isRightClickLocked = true;
let interactionStep = 1; // Default to task 1 (Landing Page)
let autoRunActive = false;
let pressStartTime = 0;

const hud = document.getElementById('interaction-hud');
const hudText = document.getElementById('hud-text');
const hudNav = document.getElementById('hud-nav');
const hudPrev = document.getElementById('hud-prev');
const hudNext = document.getElementById('hud-next');

let hudNextPressStart = 0;
let pressTimer = null;

const delay = ms => new Promise(res => setTimeout(res, ms));

function updateHUD(text, state = 'unlocked') {
    if (!hud) return;
    
    // Always show current task number
    if (hudText) {
        hudText.textContent = `TASK ${interactionStep} / 31`;
        hudText.style.display = 'flex';
    }

    if (isRightClickLocked) {
        hud.classList.add('hidden');
        return;
    }

    hud.className = ''; 
    if (state === 'unlocked' || state === 'autorun') {
        hud.classList.add(state);
    }

    if (hudNext) {
        if (state === 'autorun') hudNext.classList.add('active-step');
        else hudNext.classList.remove('active-step');
    }
}

// Initial state: Everything hidden until activated
function initializeInteraction() {
    isRightClickLocked = true;
    if (hud) hud.classList.add('hidden');
    if (hudText) hudText.style.display = 'none';
    if (hudNav) hudNav.style.display = 'none';
}
initializeInteraction();

// HUD Navigation buttons are hidden in CSS/JS now, listeners removed
/* 
hudPrev.addEventListener('click', () => { ... });
hudNext.addEventListener('pointerdown', (e) => { ... });
... 
*/

// Strictly block default right-click context menu
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Global Logic for Long-press and Left-click navigation
window.addEventListener('mousedown', startPress);
window.addEventListener('mouseup', endPress);
window.addEventListener('touchstart', (e) => startPress(e.touches[0]));
window.addEventListener('touchend', (e) => endPress(e.changedTouches[0]));

let pressStartButton = null;

function startPress(e) {
    // Track which button is being pressed
    pressStartButton = e.button !== undefined ? e.button : 0; // default to left for touches
    pressStartTime = Date.now();
}

function endPress(e) {
    const duration = Date.now() - pressStartTime;
    const button = e.button !== undefined ? e.button : 0;
    
    // Safety check: ensure the button released is the same one that pressed
    if (button !== pressStartButton) return;

    if (duration >= 3000) {
        // --- LONG PRESS (3s+) ---
        if (button === 2) { 
            // RIGHT-CLICK LONG PRESS
            if (isRightClickLocked) {
                // ACTIVATE TASKS
                console.log("Tasks Activated via Right-Click Long Press");
                isRightClickLocked = false;
                interactionStep = 1;
                if (hud) hud.classList.remove('hidden');
                if (hudText) hudText.style.display = 'flex';
                executeStep(1); 
            } else {
                // ACTIVATE AUTOPLAY
                console.log("Autoplay Activated via Right-Click Long Press");
                if (!autoRunActive) startAutoRun();
            }
        } else if (button === 0) {
            // LEFT-CLICK LONG PRESS: RESET EVERYTHING
            console.log("Resetting via Left-Click Long Press");
            isRightClickLocked = true;
            stopAutoRun();
            interactionStep = 1;
            if (hud) hud.classList.add('hidden');
            if (hudText) hudText.style.display = 'none';
            executeStep(1); // Return to landing page
        }
    } else if (duration > 50) {
        // --- SHORT PRESS ---
        if (button === 0) { // Only Left-click navigates
            if (!isRightClickLocked) {
                if (autoRunActive) {
                    console.log("Stopping Auto-run via click");
                    stopAutoRun();
                } else {
                    console.log("Advancing Task via click");
                    runNextInteraction();
                }
            }
        }
    }
    
    pressStartTime = 0;
    pressStartButton = null;
}

async function runNextInteraction() {
    interactionStep = (interactionStep % 31) + 1;
    console.log("runNextInteraction, step is now:", interactionStep);
    await executeStep(interactionStep);
}

async function runPrevInteraction() {
    // Go back 1 step (1-31 scale)
    interactionStep = (interactionStep - 2 + 31) % 31 + 1;
    await executeStep(interactionStep);
}

async function executeStep(step) {
    const randomComm = () => communities[Math.floor(Math.random() * communities.length)];
    const randomInd = () => indicators[Math.floor(Math.random() * indicators.length)];
    const randomGrade = () => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)];
    const labelDisplay = document.getElementById('hover-label-display');

    // 1. Global Cleanup of previous animation/state overrides
    document.querySelectorAll('.pulsate-animation, .blink-animation').forEach(el => {
        el.classList.remove('pulsate-animation', 'blink-animation');
    });
    // Reset label display
    if (labelDisplay) {
        labelDisplay.classList.remove('visible', 'pulsate-animation');
    }

    updateHUD("", autoRunActive ? 'autorun' : 'unlocked');

    switch(step) {
        case 1: // Landing Page (Reset)
            selectItem('community', null);
            selectItem('indicator', null);
            selectItem('grade', null);
            lockedHoverId = null;
            lockedHoverType = null;
            document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));
            break;
            
        case 2: // Random Community
        case 3: 
        case 4: 
        case 5: 
            selectItem('community', randomComm()); 
            break;
            
        case 6: // Random Indicator
        case 7: 
        case 8: 
        case 9: 
            selectItem('indicator', randomInd()); 
            break;
            
        case 10: // Random Grading
            selectItem('grade', randomGrade()); 
            break;
        case 11: // [Grade Cycle 1] Lock Community 1
        case 14: // [Grade Cycle 1] Lock Community 2
        case 18: // [Grade Cycle 2] Lock Community 3
        case 21: // [Grade Cycle 2] Lock Community 4
            {
                // 1. Maintain context
                let g = (mode === 'grade' && selectedId) ? selectedId : randomGrade();
                mode = 'grade';
                selectedId = g;
                updateView();
                
                // 2. Cleanup preceding task state
                lockedHoverId = null;
                lockedHoverType = null;
                document.querySelectorAll('.locked').forEach(el => el.classList.remove('locked'));

                // 3. Selection with Variety
                const matchingComms = communities.filter(comm => {
                    return indicators.some(ind => data[comm][ind] === g);
                });

                if (matchingComms.length > 0) {
                    // If it's a second community step (14 or 21), try to pick a different one
                    let c;
                    if ((step === 14 || step === 21) && matchingComms.length > 1) {
                        const others = matchingComms.filter(id => id !== lastLockedComm);
                        c = others[Math.floor(Math.random() * others.length)];
                    } else {
                        c = matchingComms[Math.floor(Math.random() * matchingComms.length)];
                    }

                    lastLockedComm = c;
                    const el = document.getElementById('comm-' + safeId(c));
                    if (el) {
                        const mockEvent = { stopPropagation: () => {} };
                        toggleLock(mockEvent, 'community', c); 
                    }
                }
            }
            break;

        case 12: // Pulse Step 1 (Comm 1/2/3/4)
        case 15:
        case 19:
        case 22:
            {
                if (!lockedHoverId || lockedHoverType !== 'community') {
                    // Try to recover by running the previous logic
                    await executeStep(step - 1);
                }

                const g = selectedId;
                const c = lockedHoverId;
                const matchingInds = indicators.filter(ind => data[c][ind] === g);
                
                if (matchingInds.length > 0) {
                    const randomI = matchingInds[Math.floor(Math.random() * matchingInds.length)];
                    task12SelectedInd = randomI; 
                    const indEl = document.getElementById('ind-' + safeId(randomI));
                    if (indEl) {
                        indEl.classList.add('pulsate-animation');
                        updateHoverLabel('indicator', randomI);
                        const labelDisplay = document.getElementById('hover-label-display');
                        if (labelDisplay) {
                            labelDisplay.classList.add('visible', 'pulsate-animation');
                        }
                    }
                }
            }
            break;

        case 13: // Pulse Step 2 (Comm 1/2/3/4, variety)
        case 16:
        case 20:
        case 23:
            {
                if (!lockedHoverId || lockedHoverType !== 'community') {
                    await executeStep(step - 2); 
                }

                const g = selectedId;
                const c = lockedHoverId;
                const matchingInds = indicators.filter(ind => data[c][ind] === g);
                
                if (matchingInds.length <= 1) {
                    runNextInteraction(); 
                    return;
                }

                const otherInds = matchingInds.filter(id => id !== task12SelectedInd);
                const randomI = otherInds.length > 0 
                    ? otherInds[Math.floor(Math.random() * otherInds.length)]
                    : matchingInds[0];

                const indEl = document.getElementById('ind-' + safeId(randomI));
                if (indEl) {
                    indEl.classList.add('pulsate-animation');
                    updateHoverLabel('indicator', randomI);
                    const labelDisplay = document.getElementById('hover-label-display');
                    if (labelDisplay) {
                        labelDisplay.classList.add('visible', 'pulsate-animation');
                    }
                }
            }
            break;

        case 17: // [Grade Cycle 2 Start]
        case 24: // [Grade Cycle 3 Start]
        case 28: // [Grade Cycle 4 Start]
            {
                // Select a DIFFERENT grade than the previous choice if possible
                const prevG = selectedId;
                let nextG = randomGrade();
                if (prevG && nextG === prevG) {
                    const choices = ['A', 'B', 'C', 'D'].filter(x => x !== prevG);
                    nextG = choices[Math.floor(Math.random() * choices.length)];
                }
                selectItem('grade', nextG);
            }
            break;

        case 25: // Reversed Highlight (One Indicator -> All Communities)
        case 26: // Repeat for another indicator
        case 27: // Repeat for another indicator
        case 29: // [Grade Cycle 4] Repeat Reverse
        case 30: 
        case 31:
            {
                // 1. Maintain Grade Context
                let g = (mode === 'grade' && selectedId) ? selectedId : randomGrade();
                mode = 'grade';
                selectedId = g;
                updateView();

                // 2. Identify indicators that have matching communities for this grade
                const validInds = indicators.filter(ind => {
                    return communities.some(c => data[c][ind] === g);
                });

                if (validInds.length > 0) {
                    // Variety: If Step 26, 27, 29, 30, 31, try to pick a different one
                    let randomI;
                    const multiSteps = [26, 27, 29, 30, 31];
                    if (multiSteps.includes(step) && validInds.length > 1) {
                        const others = validInds.filter(id => id !== lastLockedInd);
                        randomI = others[Math.floor(Math.random() * others.length)];
                    } else {
                        randomI = validInds[Math.floor(Math.random() * validInds.length)];
                    }
                    
                    lastLockedInd = randomI;
                    const indEl = document.getElementById('ind-' + safeId(randomI));
                    if (indEl) {
                        const mockEvent = { stopPropagation: () => {} };
                        toggleLock(mockEvent, 'indicator', randomI); 
                    }
                }
            }
            break;
    }
}

async function startAutoRun() {
    if (autoRunActive) return;
    autoRunActive = true;
    console.log("Auto-run loop started");
    updateHUD("", 'autorun');
    
    // Safety check for starting point
    if (interactionStep < 1) interactionStep = 1;
    
    while (autoRunActive) {
        try {
            console.log("Playing TASK", interactionStep);
            await executeStep(interactionStep);
            
            console.log("Waiting 3s for TASK", interactionStep);
            await delay(3000);
            
            if (!autoRunActive) break;

            // Increment and loop logic
            interactionStep = (interactionStep % 31) + 1;
            
            // USER REQUIREMENT: When repeating, skip task 1 (the reset page)
            if (interactionStep === 1) {
                console.log("Skipping Task 1 on repeat cycle");
                interactionStep = 2;
            }
            
            console.log("Advanced to TASK", interactionStep);
        } catch (err) {
            console.error("Auto-run error encountered:", err);
            // Don't break the loop, just log and try the next one
            interactionStep = (interactionStep % 31) + 1;
            if (interactionStep === 1) interactionStep = 2;
            await delay(1000);
        }
    }
    console.log("Auto-run loop stopped.");
}

function stopAutoRun() {
    autoRunActive = false;
    updateHUD("");
}


// ── Theme Toggle ───────────────────────────────────────────
window.toggleTheme = function(isLight) {
    document.body.classList.toggle('light', isLight);
    const label = document.getElementById('theme-label');
    if (label) label.textContent = isLight ? '🌙' : '☀️';
    try { localStorage.setItem('theme', isLight ? 'light' : 'dark'); } catch(e) {}
};

// Restore saved theme on load
(function() {
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            document.body.classList.add('light');
            const cb = document.getElementById('theme-checkbox');
            if (cb) cb.checked = true;
            const label = document.getElementById('theme-label');
            if (label) label.textContent = '🌙';
        }
    } catch(e) {}
})();
