// Data & Colors
const colors = {
    'A': { hex: '#00e676', darkScale: '#004d27' }, // Neon Green
    'B': { hex: '#ffeb3b', darkScale: '#665e18' }, // Neon Yellow
    'C': { hex: '#ff9800', darkScale: '#663d00' }, // Vibrant Orange
    'D': { hex: '#ff1744', darkScale: '#66091b' }  // Neon Red
};

const indicatorMetadata = {
    "F01": { label: "Household access to discretionary funds", capital: "Financial", hazard: "Generic" },
    "F02": { label: "Community financial health", capital: "Financial", hazard: "Generic" },
    "F03": { label: "Local government financial capacity", capital: "Financial", hazard: "Generic" },
    "F04": { label: "Public infrastructure maintenance budget", capital: "Financial", hazard: "Generic" },
    "F05": { label: "Climate change adaptation planning and investment", capital: "Financial", hazard: "Generic" },
    "F06": { label: "Business continuity during floods", capital: "Financial", hazard: "Flood" },
    "F07": { label: "Business continuity during heatwave", capital: "Financial", hazard: "Heatwave" },
    "F08": { label: "Household income continuity during flood", capital: "Financial", hazard: "Flood" },
    "F09": { label: "Household income continuity during heatwave", capital: "Financial", hazard: "Heatwave" },
    "F10": { label: "Flood risk reduction investment", capital: "Financial", hazard: "Flood" },
    "F11": { label: "Heatwave risk reduction investment", capital: "Financial", hazard: "Heatwave" },
    "F12": { label: "Disaster insurance", capital: "Financial", hazard: "Flood" },
    "F13": { label: "Disaster recovery budget", capital: "Financial", hazard: "Flood" },
    "F14": { label: "Energy affordibility", capital: "Financial", hazard: "Heatwave" },
    "F15": { label: "Heatwave action-plan budget", capital: "Financial", hazard: "Heatwave" },
    "H01": { label: "Secondary school attendance", capital: "Human", hazard: "Generic" },
    "H02": { label: "Food availability", capital: "Human", hazard: "Generic" },
    "H03": { label: "First aid knowledge", capital: "Human", hazard: "Generic" },
    "H04": { label: "Awareness of the need for climate change action", capital: "Human", hazard: "Generic" },
    "H05": { label: "Awarenss of climate change risk on floods", capital: "Human", hazard: "Flood" },
    "H06": { label: "Awarenss of climate change risk on heatwaves", capital: "Human", hazard: "Heatwave" },
    "H07": { label: "Awareness of how nature mitigates risk during floods", capital: "Human", hazard: "Flood" },
    "H08": { label: "Awareness of how nature mitigates risk during heatwaves", capital: "Human", hazard: "Heatwave" },
    "H09": { label: "Hazard exposure awareness", capital: "Human", hazard: "Flood" },
    "H10": { label: "Hazard vulnerability awareness", capital: "Human", hazard: "Heatwave" },
    "H11": { label: "Evacuation and safety knowledge", capital: "Human", hazard: "Flood" },
    "H12": { label: "Unsafe water awareness", capital: "Human", hazard: "Flood" },
    "H13": { label: "Heatwave protection knowledge", capital: "Human", hazard: "Heatwave" },
    "H14": { label: "Worker protection for heatwaves", capital: "Human", hazard: "Heatwave" },
    "N01": { label: "Tree cover", capital: "Natural", hazard: "Generic" },
    "N02": { label: "Permeable surfaces", capital: "Natural", hazard: "Generic" },
    "N03": { label: "Land use planning", capital: "Natural", hazard: "Generic" },
    "N04": { label: "Resource management", capital: "Natural", hazard: "Generic" },
    "N05": { label: "Land/water interface health", capital: "Natural", hazard: "Generic" },
    "N06": { label: "Ecological management for flood disaster risk reduction", capital: "Natural", hazard: "Flood" },
    "N07": { label: "Ecological management for heatwave disaster risk reduction", capital: "Natural", hazard: "Heatwave" },
    "P01": { label: "Energy supply continuity", capital: "Physical", hazard: "Generic" },
    "P02": { label: "Transportation system continuity", capital: "Physical", hazard: "Generic" },
    "P03": { label: "Communication systems continuity", capital: "Physical", hazard: "Generic" },
    "P04": { label: "Flood early warning", capital: "Physical", hazard: "Flood" },
    "P05": { label: "Heatwave early warning", capital: "Physical", hazard: "Heatwave" },
    "P06": { label: "Continuity of education during floods", capital: "Physical", hazard: "Flood" },
    "P07": { label: "Continuity of education during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P08": { label: "Emergency infrastructure and supplies during floods", capital: "Physical", hazard: "Flood" },
    "P09": { label: "Emergency infrastructure and supplies during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P10": { label: "Continuity of healthcare during disaster during floods", capital: "Physical", hazard: "Flood" },
    "P11": { label: "Continuity of healthcare during disaster during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P12": { label: "Forecasting for floods", capital: "Physical", hazard: "Flood" },
    "P13": { label: "Forecasting for heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P14": { label: "Household protection and adaptation on floods", capital: "Physical", hazard: "Flood" },
    "P15": { label: "Household protection and adaptation on heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P16": { label: "Availability of clean, safe water during floods", capital: "Physical", hazard: "Flood" },
    "P17": { label: "Availability of clean, safe water during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P18": { label: "Waste management and risk", capital: "Physical", hazard: "Flood" },
    "P19": { label: "Large scale flood protection", capital: "Physical", hazard: "Flood" },
    "S01": { label: "Mutual support", capital: "Social", hazard: "Generic" },
    "S02": { label: "Social inclusiveness of disaster risk management", capital: "Social", hazard: "Generic" },
    "S03": { label: "Community safety", capital: "Social", hazard: "Generic" },
    "S04": { label: "Local leadership", capital: "Social", hazard: "Generic" },
    "S05": { label: "Disaster response personnel", capital: "Social", hazard: "Generic" },
    "S06": { label: "Healthcare accessibility", capital: "Social", hazard: "Generic" },
    "S07": { label: "Trust in local authorities", capital: "Social", hazard: "Generic" },
    "S08": { label: "Intra-community equity", capital: "Social", hazard: "Generic" },
    "S09": { label: "Inter-community equity", capital: "Social", hazard: "Generic" },
    "S10": { label: "Risk reduction planning for floods", capital: "Social", hazard: "Flood" },
    "S11": { label: "Risk reduction planning for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S12": { label: "Response planning for floods", capital: "Social", hazard: "Flood" },
    "S13": { label: "Response planning for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S14": { label: "Family violence and response planning during floods", capital: "Social", hazard: "Flood" },
    "S15": { label: "Family violence and response planning during heatwaves", capital: "Social", hazard: "Heatwave" },
    "S16": { label: "Stakeholder engagement in risk management for floods", capital: "Social", hazard: "Flood" },
    "S17": { label: "Stakeholder engagement in risk management for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S18": { label: "Flood risk mapping", capital: "Social", hazard: "Flood" },
    "S19": { label: "Heatwave risk mapping", capital: "Social", hazard: "Heatwave" },
    "S20": { label: "Flood disaster impact data collection and use", capital: "Social", hazard: "Flood" },
    "S21": { label: "Heatwave disaster impact data collection and use", capital: "Social", hazard: "Heatwave" }
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
                commEl.style.color = '#fff';
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
                        indEl.style.color = '#121212';
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

const SAMPLE_ACTIVITIES = [
    {
        "name": "Community-Led Flood Drill",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F01",
            "F05"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Tilki",
            "Ramnagar"
        ],
        "capitals": [
            "Social",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Tilki"
                ],
                "oldMen": 7,
                "oldWomen": 2,
                "newMen": 10,
                "newWomen": 30
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Ramnagar"
                ],
                "oldMen": 10,
                "oldWomen": 2,
                "newMen": 9,
                "newWomen": 52
            }
        ]
    },
    {
        "name": "Urban Heat Island Temperature Mapping",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "H01",
            "H03"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Belpur",
            "Dashrathbasti"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Belpur"
                ],
                "oldMen": 13,
                "oldWomen": 13,
                "newMen": 13,
                "newWomen": 54
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Dashrathbasti"
                ],
                "oldMen": 4,
                "oldWomen": 17,
                "newMen": 27,
                "newWomen": 21
            }
        ]
    },
    {
        "name": "Multi-Hazard Early Warning System Installation",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "F02",
            "H02"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Jabdi",
            "Tilki",
            "Simari"
        ],
        "capitals": [
            "Physical",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Jabdi"
                ],
                "oldMen": 16,
                "oldWomen": 19,
                "newMen": 23,
                "newWomen": 17
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Tilki",
                    "Simari"
                ],
                "oldMen": 10,
                "oldWomen": 5,
                "newMen": 17,
                "newWomen": 13
            }
        ]
    },
    {
        "name": "Resilient Roof Insulation Program",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "H05",
            "H06"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Udayapur",
            "Binbari"
        ],
        "capitals": [
            "Physical",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Udayapur"
                ],
                "oldMen": 14,
                "oldWomen": 16,
                "newMen": 36,
                "newWomen": 64
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Binbari"
                ],
                "oldMen": 8,
                "oldWomen": 3,
                "newMen": 35,
                "newWomen": 13
            }
        ]
    },
    {
        "name": "Drainage Infrastructure Micro-Grant",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F08",
            "F12"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Khallabichawa",
            "Kanj"
        ],
        "capitals": [
            "Financial",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Khallabichawa"
                ],
                "oldMen": 11,
                "oldWomen": 8,
                "newMen": 18,
                "newWomen": 23
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Kanj"
                ],
                "oldMen": 7,
                "oldWomen": 8,
                "newMen": 34,
                "newWomen": 31
            }
        ]
    },
    {
        "name": "Heat-Resilient Urban Farming Workshop",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "N03",
            "H10"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Kasba",
            "Nand Gau"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Kasba"
                ],
                "oldMen": 2,
                "oldWomen": 13,
                "newMen": 44,
                "newWomen": 21
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Nand Gau"
                ],
                "oldMen": 11,
                "oldWomen": 19,
                "newMen": 26,
                "newWomen": 32
            }
        ]
    },
    {
        "name": "Emergency Response Volunteer Training",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "S05",
            "S06"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Balmi",
            "Dunga"
        ],
        "capitals": [
            "Human",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Balmi"
                ],
                "oldMen": 16,
                "oldWomen": 18,
                "newMen": 35,
                "newWomen": 50
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Dunga"
                ],
                "oldMen": 1,
                "oldWomen": 11,
                "newMen": 10,
                "newWomen": 53
            }
        ]
    },
    {
        "name": "Flood Risk Awareness School Program",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F14",
            "F15"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Khall Jain",
            "Balapur"
        ],
        "capitals": [
            "Human",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Khall Jain"
                ],
                "oldMen": 2,
                "oldWomen": 16,
                "newMen": 36,
                "newWomen": 22
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Balapur"
                ],
                "oldMen": 9,
                "oldWomen": 3,
                "newMen": 11,
                "newWomen": 18
            }
        ]
    },
    {
        "name": "Green Canopy Reforestation Initiative",
        "year": "2023",
        "date": "2023-Q2",
        "indicators": [
            "N01",
            "H12"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Bhartapur",
            "Payal"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q2",
                "communities": [
                    "Bhartapur"
                ],
                "oldMen": 13,
                "oldWomen": 7,
                "newMen": 33,
                "newWomen": 52
            },
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Payal"
                ],
                "oldMen": 4,
                "oldWomen": 2,
                "newMen": 14,
                "newWomen": 27
            }
        ]
    },
    {
        "name": "Resilience Budgeting Technical Paper",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "F10",
            "F11"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Baidi",
            "Shreelanka"
        ],
        "capitals": [
            "Financial",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Baidi"
                ],
                "oldMen": 5,
                "oldWomen": 21,
                "newMen": 58,
                "newWomen": 30
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Shreelanka"
                ],
                "oldMen": 9,
                "oldWomen": 14,
                "newMen": 28,
                "newWomen": 22
            }
        ]
    },
    {
        "name": "Community Water Reservoir Restoration",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "N05",
            "F07"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Dakshinshahipur",
            "Girdharpur"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Dakshinshahipur"
                ],
                "oldMen": 18,
                "oldWomen": 6,
                "newMen": 38,
                "newWomen": 30
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Girdharpur"
                ],
                "oldMen": 12,
                "oldWomen": 17,
                "newMen": 41,
                "newWomen": 29
            }
        ]
    },
    {
        "name": "Public Health Heat Management Manual",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "H14",
            "S02"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Farela",
            "Tihuni"
        ],
        "capitals": [
            "Human",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Farela"
                ],
                "oldMen": 16,
                "oldWomen": 17,
                "newMen": 47,
                "newWomen": 20
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Tihuni"
                ],
                "oldMen": 2,
                "oldWomen": 2,
                "newMen": 29,
                "newWomen": 13
            }
        ]
    },
    {
        "name": "Climate-Resilient Building Code Advocacy",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "P04",
            "P05"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Chanaura",
            "Sangharshanagar"
        ],
        "capitals": [
            "Social",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Chanaura"
                ],
                "oldMen": 18,
                "oldWomen": 12,
                "newMen": 51,
                "newWomen": 67
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Sangharshanagar"
                ],
                "oldMen": 5,
                "oldWomen": 6,
                "newMen": 7,
                "newWomen": 42
            }
        ]
    },
    {
        "name": "Small Business Flood Insurance Literacy",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F03",
            "F04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Tediya",
            "Tigra"
        ],
        "capitals": [
            "Financial",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Tediya"
                ],
                "oldMen": 0,
                "oldWomen": 18,
                "newMen": 42,
                "newWomen": 44
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Tigra"
                ],
                "oldMen": 5,
                "oldWomen": 11,
                "newMen": 17,
                "newWomen": 28
            }
        ]
    },
    {
        "name": "Integrated Hazard Mapping Dashboards",
        "year": "2023",
        "date": "2023-Q2",
        "indicators": [
            "S15",
            "H13"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Bankatti",
            "Banghushra"
        ],
        "capitals": [
            "Physical",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q2",
                "communities": [
                    "Bankatti"
                ],
                "oldMen": 19,
                "oldWomen": 6,
                "newMen": 44,
                "newWomen": 50
            },
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Banghushra"
                ],
                "oldMen": 1,
                "oldWomen": 15,
                "newMen": 34,
                "newWomen": 34
            }
        ]
    },
    {
        "name": "Livestock Heat Protection Shelters",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "N07",
            "H08"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Rajipur",
            "Sankatti"
        ],
        "capitals": [
            "Physical",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Rajipur"
                ],
                "oldMen": 7,
                "oldWomen": 7,
                "newMen": 57,
                "newWomen": 31
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Sankatti"
                ],
                "oldMen": 5,
                "oldWomen": 19,
                "newMen": 42,
                "newWomen": 48
            }
        ]
    },
    {
        "name": "Rainwater Harvesting System Pilots",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F13",
            "N04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Shonaha Gau",
            "Bangalipur"
        ],
        "capitals": [
            "Natural",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Shonaha Gau"
                ],
                "oldMen": 16,
                "oldWomen": 22,
                "newMen": 31,
                "newWomen": 66
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Bangalipur"
                ],
                "oldMen": 1,
                "oldWomen": 17,
                "newMen": 9,
                "newWomen": 11
            }
        ]
    },
    {
        "name": "Psychosocial Support for Disaster Recovery",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "S20",
            "S21"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Bhagrahiya",
            "Bhagatpur"
        ],
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Bhagrahiya"
                ],
                "oldMen": 10,
                "oldWomen": 14,
                "newMen": 59,
                "newWomen": 53
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Bhagatpur"
                ],
                "oldMen": 6,
                "oldWomen": 3,
                "newMen": 20,
                "newWomen": 46
            }
        ]
    },
    {
        "name": "Micro-Credit for Agricultural Adaptation",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "F06",
            "F07"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Patharbojhi",
            "Sonaha"
        ],
        "capitals": [
            "Financial",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Patharbojhi"
                ],
                "oldMen": 13,
                "oldWomen": 8,
                "newMen": 11,
                "newWomen": 57
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Sonaha"
                ],
                "oldMen": 3,
                "oldWomen": 5,
                "newMen": 22,
                "newWomen": 11
            }
        ]
    },
    {
        "name": "Local Government Resilience Network",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "S10",
            "S11"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Dangpur",
            "Dhungrahi"
        ],
        "capitals": [
            "Social",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Dangpur"
                ],
                "oldMen": 5,
                "oldWomen": 7,
                "newMen": 33,
                "newWomen": 39
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Dhungrahi"
                ],
                "oldMen": 1,
                "oldWomen": 5,
                "newMen": 17,
                "newWomen": 28
            }
        ]
    },
    {
        "name": "Solar-Powered Drip Irrigation Expansion",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "N04",
            "P16"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Kasba",
            "Bangalipur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Natural",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Kasba"
                ],
                "oldMen": 7,
                "oldWomen": 0,
                "newMen": 53,
                "newWomen": 68
            },
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Bangalipur"
                ],
                "oldMen": 8,
                "oldWomen": 1,
                "newMen": 27,
                "newWomen": 52
            }
        ]
    },
    {
        "name": "Multimodal Early Warning System Drill",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F02",
            "H02",
            "S15"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Balmi",
            "Tilki"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Balmi"
                ],
                "oldMen": 19,
                "oldWomen": 0,
                "newMen": 34,
                "newWomen": 40
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Tilki"
                ],
                "oldMen": 12,
                "oldWomen": 16,
                "newMen": 33,
                "newWomen": 47
            }
        ]
    },
    {
        "name": "Mangrove Bio-Shield Resilience Audit",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "N05",
            "N06"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Udayapur",
            "Baidi"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Natural",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Udayapur"
                ],
                "oldMen": 13,
                "oldWomen": 4,
                "newMen": 25,
                "newWomen": 29
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Baidi"
                ],
                "oldMen": 11,
                "oldWomen": 16,
                "newMen": 25,
                "newWomen": 43
            }
        ]
    },
    {
        "name": "Community Health Resilience Supply Kit",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "H12",
            "S06"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Kasba"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Kasba"
                ],
                "oldMen": 1,
                "oldWomen": 17,
                "newMen": 22,
                "newWomen": 26
            }
        ]
    },
    {
        "name": "Flood-Resilient Bridge Reinforcement",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "P08",
            "P18"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Kumra Gau"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Physical",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Kumra Gau"
                ],
                "oldMen": 4,
                "oldWomen": 12,
                "newMen": 41,
                "newWomen": 36
            }
        ]
    },
    {
        "name": "Micro-Financing for Disaster Recovery",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F06",
            "F10"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Tediya",
            "Tigra"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Financial",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Tediya"
                ],
                "oldMen": 3,
                "oldWomen": 14,
                "newMen": 31,
                "newWomen": 40
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Tigra"
                ],
                "oldMen": 14,
                "oldWomen": 10,
                "newMen": 29,
                "newWomen": 33
            }
        ]
    },
    {
        "name": "Solar-Powered Public Cooling Centers",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "P01",
            "H06"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Patharbojhi",
            "Sonaha"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Patharbojhi"
                ],
                "oldMen": 8,
                "oldWomen": 10,
                "newMen": 43,
                "newWomen": 46
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Sonaha"
                ],
                "oldMen": 6,
                "oldWomen": 18,
                "newMen": 31,
                "newWomen": 18
            }
        ]
    },
    {
        "name": "Adaptive Farming Practices Field Day",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "N03",
            "N07"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Shonaha Gau"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Natural",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Shonaha Gau"
                ],
                "oldMen": 7,
                "oldWomen": 19,
                "newMen": 29,
                "newWomen": 30
            }
        ]
    },
    {
        "name": "Disaster Risk Reduction Youth Training",
        "year": "2023",
        "date": "2023-Q2",
        "indicators": [
            "S05",
            "S10"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Rajipur"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q2",
                "communities": [
                    "Rajipur"
                ],
                "oldMen": 7,
                "oldWomen": 1,
                "newMen": 34,
                "newWomen": 59
            }
        ]
    },
    {
        "name": "Sustainable Tourism Policy Master Plan",
        "year": "2024",
        "date": "2024-Q4",
        "indicators": [
            "S04",
            "S11"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Girdharpur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Social",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Girdharpur"
                ],
                "oldMen": 2,
                "oldWomen": 10,
                "newMen": 10,
                "newWomen": 23
            }
        ]
    },
    {
        "name": "Riverbank Bio-Engineering Annual Audit",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "N05",
            "P19"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Banghushra"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Natural",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Banghushra"
                ],
                "oldMen": 18,
                "oldWomen": 9,
                "newMen": 14,
                "newWomen": 54
            }
        ]
    },
    {
        "name": "Public Infrastructure Vulnerability Map",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "P14",
            "S20"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Bhaishakhani",
            "Guruwa Gau"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Bhaishakhani"
                ],
                "oldMen": 8,
                "oldWomen": 24,
                "newMen": 11,
                "newWomen": 73
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Guruwa Gau"
                ],
                "oldMen": 2,
                "oldWomen": 4,
                "newMen": 30,
                "newWomen": 46
            }
        ]
    },
    {
        "name": "Women-Led Quick Response Resilience Units",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "S01",
            "S02"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Dangpur",
            "Dhungrahi"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Social",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Dangpur"
                ],
                "oldMen": 17,
                "oldWomen": 4,
                "newMen": 23,
                "newWomen": 17
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Dhungrahi"
                ],
                "oldMen": 10,
                "oldWomen": 9,
                "newMen": 24,
                "newWomen": 21
            }
        ]
    },
    {
        "name": "Rainwater Harvesting System Technical Camp",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F13",
            "N04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Bhagrahiya"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Natural",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Bhagrahiya"
                ],
                "oldMen": 17,
                "oldWomen": 2,
                "newMen": 24,
                "newWomen": 30
            }
        ]
    },
    {
        "name": "Psychosocial First Aid Practitioner Course",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "S20",
            "S21"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Bhagatpur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Bhagatpur"
                ],
                "oldMen": 13,
                "oldWomen": 22,
                "newMen": 10,
                "newWomen": 29
            }
        ]
    },
    {
        "name": "Agricultural Crop Insurance Policy Review",
        "year": "2024",
        "date": "2024-Q4",
        "indicators": [
            "F12",
            "F04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Nand Gau"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Financial",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Nand Gau"
                ],
                "oldMen": 9,
                "oldWomen": 22,
                "newMen": 45,
                "newWomen": 61
            }
        ]
    },
    {
        "name": "Cool-Roof Reflective Coating Network Pilot",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "P15",
            "H05"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Purba Lalitpur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Purba Lalitpur"
                ],
                "oldMen": 10,
                "oldWomen": 19,
                "newMen": 19,
                "newWomen": 59
            }
        ]
    },
    {
        "name": "Resilient Urban Design Framework Launch",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "P04",
            "P05"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Sano Bikree"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Sano Bikree"
                ],
                "oldMen": 0,
                "oldWomen": 11,
                "newMen": 13,
                "newWomen": 31
            }
        ]
    },
    {
        "name": "Community Emergency Alert Radio Servicing",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "S16",
            "P03"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Tilki",
            "Jabdi"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Social",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Tilki"
                ],
                "oldMen": 4,
                "oldWomen": 15,
                "newMen": 53,
                "newWomen": 47
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Jabdi"
                ],
                "oldMen": 14,
                "oldWomen": 8,
                "newMen": 28,
                "newWomen": 46
            }
        ]
    },
    {
        "name": "Post-Flood Silt Clearance Community Drive",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "P18",
            "N02"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Balmi",
            "Dunga"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Physical",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Balmi"
                ],
                "oldMen": 7,
                "oldWomen": 21,
                "newMen": 49,
                "newWomen": 21
            },
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Dunga"
                ],
                "oldMen": 3,
                "oldWomen": 7,
                "newMen": 6,
                "newWomen": 47
            }
        ]
    }
];

let activitiesData = [...SAMPLE_ACTIVITIES];
let activitiesFilters = { hazard: 'All', capital: 'All', search: '' };
let hasStartedActivitiesListeners = false;
let hasFetchedLiveActivities = false;

let scoresFilters = { level: 'All', search: '' };
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

function renderActivities() {
    const grid = document.getElementById('activities-grid');
    const noRes = document.getElementById('act-no-results');
    if (!grid) return;

    const query = activitiesFilters.search.toLowerCase();

    const filtered = activitiesData.filter(item => {
        // Multi-Hazard Filter Check
        const matchHazard = activitiesFilters.hazard === 'All' || item.hazards.includes(activitiesFilters.hazard);
        // Capital Filter Check
        const matchCapital = activitiesFilters.capital === 'All' || item.capitals.includes(activitiesFilters.capital);
        
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

    if (!scoresDataLive) {
        fetch('T0_Scores.csv')
            .then(res => res.text())
            .then(csv => {
                scoresDataLive = parseTransposedScores(csv);
                renderScores();
            })
            .catch(err => {
                console.error("Failed to load live scores, falling back to static:", err);
                // Fallback to static if live fetch fails (though user explicitly asked for live)
                if (!window.communitiesDataStaticRaw) {
                    const script = document.createElement('script');
                    script.src = 'communities_static.js';
                    script.onload = renderScores;
                    document.head.appendChild(script);
                } else {
                    renderScores();
                }
            });
    } else {
        renderScores();
    }
}

function parseTransposedScores(csv) {
    // T0_Scores.csv structure (transposed):
    // Row 1: Score and Grading, Name1, Name2...
    // Row 2: Community code, c_XX, c_YY...
    // Row 3: T0 Flood, 50, 60...
    // Row 4: T0 Heat, 40, N/A...
    // Row 5: T0 Generic, 45, 55...
    
    const lines = csv.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length < 5) return [];

    const names = lines[0].split(',');
    const codes = lines[1].split(',');
    const floods = lines[2].split(',');
    const heats = lines[3].split(',');
    const generics = lines[4].split(',');

    const parsed = [];
    // Start from index 1 to skip the row label
    for (let i = 1; i < names.length; i++) {
        const name = names[i].replace(/["]/g, ''); // Remove quotes if present
        const code = codes[i];
        const flood = parseFloat(floods[i]) || 0;
        const heatRaw = heats[i];
        const heat = (heatRaw === 'N/A' || !heatRaw) ? null : parseFloat(heatRaw);
        const generic = parseFloat(generics[i]) || 0;

        // Determine Level based on average (similar to previous logic)
        const activeMetrics = [flood, generic];
        if (heat !== null) activeMetrics.push(heat);
        const avg = activeMetrics.reduce((a, b) => a + b, 0) / activeMetrics.length;
        
        let level = 'Low';
        if (avg >= 70) level = 'High';
        else if (avg >= 50) level = 'Medium';

        parsed.push({ name, code, flood, heat, generic, level, avg });
    }
    return parsed;
}

function setupScoresListeners() {
    const search = document.getElementById('score-search');
    if (search) {
        search.oninput = (e) => {
            scoresFilters.search = e.target.value;
            renderScores();
        };
    }

    const container = document.getElementById('score-level-filters');
    if (container) {
        container.onclick = (e) => {
            const btn = e.target.closest('.chip');
            if (!btn) return;
            scoresFilters.level = btn.getAttribute('data-level');
            container.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === btn));
            renderScores();
        };
    }
}

function renderScores() {
    const grid = document.getElementById('scores-grid');
    const noRes = document.getElementById('score-no-results');
    if (!grid) return;

    let itemsToRender = [];

    if (scoresDataLive) {
        itemsToRender = scoresDataLive;
    } else {
        // Fallback to old format if live data failed
        const rawDataRef = window.communitiesDataStaticRaw || (typeof communitiesDataStaticRaw !== 'undefined' ? communitiesDataStaticRaw : null);
        if (rawDataRef) {
            itemsToRender = rawDataRef.data.map(line => {
                const p = line.split(',');
                if (p[0] === 'Id') return null;
                const name = p[1] || 'Unknown';
                const flood = parseFloat(p[7]) || 0;
                const heat = parseFloat(p[9]) || 0;
                const generic = parseFloat(p[11]) || 0;
                const avg = (flood + heat + generic) / 3;
                let level = 'Low';
                if (avg >= 70) level = 'High';
                else if (avg >= 50) level = 'Medium';
                return { name, flood, heat, generic, level, avg };
            }).filter(i => i);
        }
    }

    const query = scoresFilters.search.toLowerCase();
    const filtered = itemsToRender.filter(item => {
        const matchLevel = scoresFilters.level === 'All' || item.level === scoresFilters.level;
        const matchSearch = !query || item.name.toLowerCase().includes(query);
        return matchLevel && matchSearch;
    });

    grid.innerHTML = '';
    noRes.classList.toggle('hidden', filtered.length > 0);

    filtered.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'score-card';
        card.style.animationDelay = `${i * 0.03}s`;
        
        const getScoreColor = (val) => {
            if (val >= 70) return '#00e676';
            if (val >= 50) return '#ffeb3b';
            return '#ff1744';
        };

        // Header and Palika logic (CSV might not have Palika row anymore, using name)
        card.innerHTML = `
            <div class="score-header">
                <h3 class="comm-name">${item.name}</h3>
                <div class="comm-info">ID: ${item.code || 'N/A'}</div>
            </div>
            
            <div class="score-metrics">
                <div class="metric-row">
                    <div class="metric-label">
                        <span>Flood Resilience</span>
                        <span style="color:${getScoreColor(item.flood)}">${item.flood}%</span>
                    </div>
                    <div class="metric-bar-bg">
                        <div class="metric-bar-fill" style="width:${item.flood}%; background:${getScoreColor(item.flood)}"></div>
                    </div>
                </div>
                
                ${item.heat !== null ? `
                <div class="metric-row">
                    <div class="metric-label">
                        <span>Heat Resilience</span>
                        <span style="color:${getScoreColor(item.heat)}">${item.heat}%</span>
                    </div>
                    <div class="metric-bar-bg">
                        <div class="metric-bar-fill" style="width:${item.heat}%; background:${getScoreColor(item.heat)}"></div>
                    </div>
                </div>
                ` : ''}
                
                <div class="metric-row">
                    <div class="metric-label">
                        <span>Generic Average</span>
                        <span style="color:${getScoreColor(item.generic)}">${item.generic}%</span>
                    </div>
                    <div class="metric-bar-bg">
                        <div class="metric-bar-fill" style="width:${item.generic}%; background:${getScoreColor(item.generic)}"></div>
                    </div>
                </div>
            </div>

            <div class="score-level-tag level-${item.level}">
                ${item.level} Resilience
            </div>
        `;
        grid.appendChild(card);
    });
}


// ── Knowledge Screen Logic ────────────────────────────
function initKnowledgeScreen() {
    const grid = document.getElementById('knowledge-grid');
    if (!grid || grid.children.length > 0) return;

    // Filter activities that possess knowledge products
    const knowledgeActivities = (window.activitiesData || SAMPLE_ACTIVITIES).filter(act => act.hasKnowledge);

    if (knowledgeActivities.length === 0) {
        grid.innerHTML = '<div style="color:#aaa; text-align:center; width:100%; grid-column:1/-1;">No knowledge products mapped to any executed activities yet.</div>';
        return;
    }

    grid.innerHTML = knowledgeActivities.map(act => {
        const primaryCapital = act.capitals && act.capitals.length > 0 ? act.capitals[0] : 'Unknown';
        const meta = actCapitalMeta[primaryCapital] || { icon: '📄' };
        
        return `
        <div class="know-card">
            <div class="know-img">${meta.icon}</div>
            <div class="know-body">
                <span class="know-tag">${primaryCapital} Report</span>
                <h3 class="know-title">${act.name}</h3>
                <p class="know-desc">Knowledge product and technical observations generated from executions across ${act.communities.join(', ')} focusing on ${act.hazards.join(', ')} resilience (${act.date || act.year}).</p>
            </div>
        </div>
        `;
    }).join('');
}


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

