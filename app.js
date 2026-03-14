// State & Persistence
let isAdmin = false;
let communitiesData = [...communities];

// Load from LocalStorage
const savedCommunities = JSON.parse(localStorage.getItem('added_communities') || '[]');
communitiesData = [...communities, ...savedCommunities];

// Map Initialization
const map = L.map('map', {
    zoomControl: true
}).setView([26.5, 87.5], 6);

const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EBP, and the GIS User Community'
});

const baseLayers = {
    "OpenStreetMap": osm,
    "Satellite": satellite
};

L.control.layers(baseLayers, null, { position: 'topleft' }).addTo(map);

// Sidebar Elements
const sidebar = document.getElementById('sidebar');
const showBtn = document.getElementById('show-sidebar-btn');
const hideBtn = document.getElementById('toggle-sidebar');
const openCompareBtn = document.getElementById('open-compare-btn');
const exitCompareBtn = document.getElementById('exit-compare-btn');
const colCompare = document.getElementById('col-compare');
const compareSelect = document.getElementById('compare-community-select-v2');

// Admin Elements
const loginBtn = document.getElementById('admin-login-btn');
const logoutBtn = document.getElementById('admin-logout-btn');
const loginModal = document.getElementById('login-modal');
const addCommModal = document.getElementById('add-community-modal');
const adminPasswordInput = document.getElementById('admin-password');
const loginError = document.getElementById('login-error');

// Admin Login Logic
loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    adminPasswordInput.value = '';
    loginError.classList.add('hidden');
});

document.getElementById('login-cancel').addEventListener('click', () => {
    loginModal.classList.add('hidden');
});

document.getElementById('login-submit').addEventListener('click', () => {
    if (adminPasswordInput.value === 'Suchana@2022') {
        isAdmin = true;
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        loginModal.classList.add('hidden');
        document.body.classList.add('admin-mode-active');

        // Add Admin Badge
        const badge = document.createElement('div');
        badge.id = 'admin-badge';
        badge.className = 'admin-badge';
        badge.innerText = 'Admin Mode: Click map to add community';
        document.body.appendChild(badge);
    } else {
        loginError.classList.remove('hidden');
    }
});

logoutBtn.addEventListener('click', () => {
    isAdmin = false;
    loginBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    document.body.classList.remove('admin-mode-active');
    const badge = document.getElementById('admin-badge');
    if (badge) badge.remove();
});

// Map Click for Admin
map.on('click', (e) => {
    if (!isAdmin) return;
    const { lat, lng } = e.latlng;
    openAddCommunityForm(lat, lng);
});

function openAddCommunityForm(lat, lng) {
    resetAddCommunityForm();
    addCommModal.classList.remove('hidden');
    document.getElementById('new-comm-coords').value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
}

function resetAddCommunityForm() {
    document.getElementById('add-community-form').reset();
    showFormSection('basics');

    // Populate Gradings Grid
    const grid = document.getElementById('gradings-grid');
    grid.innerHTML = '';
    staticData.capitals.forEach(cap => {
        staticData.indicators[cap.id].forEach(ind => {
            const div = document.createElement('div');
            div.className = 'form-group';
            div.innerHTML = `
                <label style="color: ${cap.color}">${ind.name}</label>
                <div style="display: flex; gap: 5px;">
                    <select class="grading-input" data-indicator="${ind.id}" data-type="t0">
                        <option value="A">T0: A</option><option value="B">T0: B</option><option value="C">T0: C</option><option value="D">T0: D</option>
                    </select>
                    <select class="grading-input" data-indicator="${ind.id}" data-type="t1">
                        <option value="A">T1: A</option><option value="B">T1: B</option><option value="C">T1: C</option><option value="D">T1: D</option>
                    </select>
                </div>
            `;
            grid.appendChild(div);
        });
    });
}

// Form Tab Switching
document.querySelectorAll('.form-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        showFormSection(btn.dataset.formTab);
    });
});

function showFormSection(sectionId) {
    document.querySelectorAll('.form-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.formTab === sectionId));
    document.querySelectorAll('.form-section').forEach(s => s.classList.toggle('hidden', s.id !== `form-${sectionId}`));
}

document.getElementById('add-comm-cancel').addEventListener('click', () => {
    addCommModal.classList.add('hidden');
});

document.getElementById('add-comm-submit').addEventListener('click', () => {
    const name = document.getElementById('new-comm-name').value;
    if (!name) return alert("Please enter a community name.");

    const coordsStr = document.getElementById('new-comm-coords').value;
    if (!coordsStr) return alert("Please click on the map to set coordinates.");
    const [lat, lng] = coordsStr.split(',').map(Number);
    if (isNaN(lat) || isNaN(lng)) return alert("Invalid coordinates.");

    const gradings = {};
    document.querySelectorAll('.grading-input').forEach(sel => {
        const indId = sel.dataset.indicator;
        const type = sel.dataset.type;
        if (!gradings[indId]) gradings[indId] = {};
        gradings[indId][type] = sel.value;
    });

    const newComm = {
        id: "comm_" + Date.now(),
        name: name,
        country: document.getElementById('new-comm-country').value,
        coords: [lat, lng],
        t0_score: parseInt(document.getElementById('new-score-t0').value),
        t1_score: parseInt(document.getElementById('new-score-t1').value),
        demographics: {
            total: parseInt(document.getElementById('new-demo-total').value),
            male: parseInt(document.getElementById('new-demo-male').value),
            female: parseInt(document.getElementById('new-demo-female').value),
            children: parseInt(document.getElementById('new-demo-children').value),
            elderly: parseInt(document.getElementById('new-demo-elderly').value),
            disabilities: parseInt(document.getElementById('new-demo-disabilities').value),
            description: document.getElementById('new-demo-desc').value
        },
        gradings: gradings
    };

    // Save
    const added = JSON.parse(localStorage.getItem('added_communities') || '[]');
    added.push(newComm);
    localStorage.setItem('added_communities', JSON.stringify(added));

    // Update local data and UI
    communitiesData.push(newComm);
    renderMarkers(document.getElementById('country-select').value);
    populateCompareDropdown();
    addCommModal.classList.add('hidden');
    alert("Community added successfully!");
});

// Comparison Toggle
openCompareBtn.addEventListener('click', () => {
    sidebar.classList.add('expanded');
    colCompare.classList.remove('hidden');
    exitCompareBtn.classList.remove('hidden');
    openCompareBtn.classList.add('hidden');
    populateCompareDropdown();
});

exitCompareBtn.addEventListener('click', () => {
    sidebar.classList.remove('expanded');
    colCompare.classList.add('hidden');
    exitCompareBtn.classList.add('hidden');
    openCompareBtn.classList.remove('hidden');
});

function populateCompareDropdown() {
    compareSelect.innerHTML = '<option value="" disabled selected>Select Community to Compare...</option>';
    communitiesData.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.innerText = c.name;
        compareSelect.appendChild(opt);
    });
}

compareSelect.addEventListener('change', (e) => {
    const communityId = e.target.value;
    const community = communities.find(c => c.id === communityId);
    if (community) renderColumn(community, 'compare');
});

// Sidebar Core Toggle
hideBtn.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    showBtn.classList.remove('hidden');
});

showBtn.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    showBtn.classList.add('hidden');
});

// Marker Logic
const markersGroup = L.layerGroup().addTo(map);
const communityMarkers = {};

function renderMarkers(countryFilter = "All") {
    markersGroup.clearLayers();
    Object.keys(communityMarkers).forEach(k => delete communityMarkers[k]);

    communitiesData.forEach(community => {
        if (countryFilter === "All" || community.country === countryFilter) {
            const marker = L.marker(community.coords);
            marker.on('click', () => {
                resetHighlights();
                renderColumn(community, 'main');
                sidebar.classList.remove('hidden');
                showBtn.classList.add('hidden');
            });
            markersGroup.addLayer(marker);
            communityMarkers[community.id] = marker;
        }
    });
}
renderMarkers();
renderColumn(null, 'main');

function resetHighlights() {
    Object.values(communityMarkers).forEach(m => {
        const icon = m.getElement();
        if (icon) icon.classList.remove('leaflet-marker-highlighted');
    });
}

function highlightCommunities(communityIds) {
    resetHighlights();
    const markersToFit = [];
    communityIds.forEach(id => {
        const m = communityMarkers[id];
        if (m) {
            const icon = m.getElement();
            if (icon) icon.classList.add('leaflet-marker-highlighted');
            markersToFit.push(m.getLatLng());
        }
    });
    if (markersToFit.length > 0) {
        const bounds = L.latLngBounds(markersToFit);
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 });
    }
}

document.getElementById('country-select').addEventListener('change', (e) => {
    const filter = e.target.value;
    renderMarkers(filter);
    resetHighlights();
    renderColumn(null, 'main'); // Render global view
    if (filter === "All") {
        map.setView([26.5, 87.5], 6);
    } else {
        const c = staticData.countries.find(x => x.name === filter);
        if (c) map.setView(c.center, c.zoom);
    }
});

// Tab Logic
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const col = btn.dataset.col; // 'main' or 'compare'
            const tab = btn.dataset.tab; // 'score', 'demographics', etc.

            // Update buttons in this column
            document.querySelectorAll(`.tab-btn[data-col="${col}"]`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update contents in this column
            document.querySelectorAll(`.tab-content[id*="-${col}"]`).forEach(c => c.classList.add('hidden'));
            document.getElementById(`tab-${tab}-${col}`).classList.remove('hidden');
        });
    });
}
initTabs();

// State
let needleAngles = { main: { t0: 0, t1: 0 }, compare: { t0: 0, t1: 0 } };
let animFrames = { main: null, compare: null };
let accordionState = { main: true, compare: true };

// Accordion Toggle Listeners
function initAccordionToggles() {
    ['main', 'compare'].forEach(side => {
        const btn = document.getElementById(`accordion-toggle-${side}`);
        if (btn) {
            btn.addEventListener('click', () => {
                accordionState[side] = !accordionState[side];
                btn.innerText = `Accordion: ${accordionState[side] ? 'ON' : 'OFF'}`;
                btn.classList.toggle('active');
            });
        }
    });
}
initAccordionToggles();

function renderColumn(community, colType) {
    if (colType === 'main') {
        const title = community ? community.name : "Global Overview";
        document.getElementById('community-name').innerText = title;

        // Always show the gauge group wrapper if we want labels, but maybe hide the canvas if no community
        const gaugeGroup = document.getElementById('gauge-group-main');
        if (community) {
            gaugeGroup.classList.remove('hidden');
            animateGauge(community.t0_score, community.t1_score, 'gauge-canvas-main', 'main');
        } else {
            gaugeGroup.classList.add('hidden'); // Hide gauge if no specific community
        }

        renderDemographics(community, 'demographics-text-main');
        renderActivities(community, 'activities-list-main');
        renderCapitals(community, 'capitals-container-main', 'main');
    } else {
        if (!community) return;
        document.getElementById('compare-community-name').innerText = community.name;
        document.getElementById('gauge-group-compare').classList.remove('hidden');
        renderDemographics(community, 'demographics-text-compare');
        renderActivities(community, 'activities-list-compare');
        animateGauge(community.t0_score, community.t1_score, 'gauge-canvas-compare', 'compare');
        renderCapitals(community, 'capitals-container-compare', 'compare');
    }
}

function renderDemographics(community, targetId) {
    const container = document.getElementById(targetId);
    let d;
    let title = "";

    if (community) {
        d = community.demographics;
        title = "Community Demographics";
    } else {
        // Aggregate totals for all/filtered communities
        const currentCountry = document.getElementById('country-select').value;
        const filtered = currentCountry === "All"
            ? communities
            : communities.filter(c => c.country === currentCountry);

        d = filtered.reduce((acc, curr) => {
            const cd = curr.demographics;
            acc.total += cd.total;
            acc.male += cd.male;
            acc.female += cd.female;
            acc.children += cd.children;
            acc.elderly += cd.elderly;
            acc.disabilities += cd.disabilities;
            return acc;
        }, { total: 0, male: 0, female: 0, children: 0, elderly: 0, disabilities: 0 });

        d.description = `Aggregate data across ${filtered.length} communities in ${currentCountry === "All" ? "all regions" : currentCountry}.`;
        title = `Total Demographics (${currentCountry})`;
    }

    container.innerHTML = `
        <h3 style="margin-bottom: 15px; font-size: 0.9rem; color: var(--primary); text-transform: uppercase; letter-spacing: 0.05em;">${title}</h3>
        <div class="demo-grid">
            <div class="demo-item"><i data-lucide="users"></i> <div><span class="demo-label">Total</span><span class="demo-value">${d.total.toLocaleString()}</span></div></div>
            <div class="demo-item"><i data-lucide="user"></i> <div><span class="demo-label">Male</span><span class="demo-value">${d.male.toLocaleString()}</span></div></div>
            <div class="demo-item"><i data-lucide="user-plus"></i> <div><span class="demo-label">Female</span><span class="demo-value">${d.female.toLocaleString()}</span></div></div>
            <div class="demo-item"><i data-lucide="baby"></i> <div><span class="demo-label">Children</span><span class="demo-value">${d.children.toLocaleString()}</span></div></div>
            <div class="demo-item"><i data-lucide="accessibility"></i> <div><span class="demo-label">Elderly</span><span class="demo-value">${d.elderly.toLocaleString()}</span></div></div>
            <div class="demo-item"><i data-lucide="contact"></i> <div><span class="demo-label">Disabilities</span><span class="demo-value">${d.disabilities.toLocaleString()}</span></div></div>
        </div>
        <div class="demo-description">${d.description}</div>
    `;
    lucide.createIcons();
}

function renderActivities(community, targetId, countryFilter = "All") {
    const list = document.getElementById(targetId);
    list.innerHTML = '';

    if (community) {
        // Single community mode
        activities.filter(a => a.communityIds.includes(community.id)).forEach(act => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${act.name}</strong>`;
            list.appendChild(li);
        });
    } else {
        // Global / All mode - Group unique activities
        const uniqueActs = [];
        activities.forEach(a => {
            // If in country filter, only show activities that happen in at least one community of that country
            const filteredCommIds = countryFilter === "All"
                ? a.communityIds
                : a.communityIds.filter(id => {
                    const c = communities.find(comm => comm.id === id);
                    return c && c.country === countryFilter;
                });

            if (filteredCommIds.length > 0) {
                if (!uniqueActs.find(x => x.name === a.name)) {
                    uniqueActs.push({ name: a.name, communityIds: filteredCommIds });
                } else {
                    // Merge community IDs for same-named activities if they split
                    const existing = uniqueActs.find(x => x.name === a.name);
                    filteredCommIds.forEach(id => {
                        if (!existing.communityIds.includes(id)) existing.communityIds.push(id);
                    });
                }
            }
        });

        uniqueActs.forEach(act => {
            const li = document.createElement('li');
            li.className = 'activity-item-global';
            li.innerHTML = `<strong>${act.name}</strong><small>Undertaken in ${act.communityIds.length} communities</small>`;
            li.onclick = () => highlightCommunities(act.communityIds);
            list.appendChild(li);
        });
    }
}

function animateGauge(targetT0, targetT1, canvasId, side) {
    const startT0 = needleAngles[side].t0;
    const startT1 = needleAngles[side].t1;
    let startTime = null;
    const duration = 800;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        needleAngles[side].t0 = startT0 + (targetT0 - startT0) * ease;
        needleAngles[side].t1 = startT1 + (targetT1 - startT1) * ease;
        drawGauge(needleAngles[side].t0, needleAngles[side].t1, canvasId);
        if (progress < 1) animFrames[side] = requestAnimationFrame(step);
    }
    cancelAnimationFrame(animFrames[side]);
    animFrames[side] = requestAnimationFrame(step);
}

function drawGauge(t0, t1, canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2, cy = canvas.height - 20, r = 100;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI, 0);
    ctx.lineWidth = 20; ctx.strokeStyle = '#e2e8f0'; ctx.stroke();
    drawNeedle(ctx, cx, cy, r - 10, (t0 / 100) * Math.PI, '#94a3b8');
    drawNeedle(ctx, cx, cy, r, (t1 / 100) * Math.PI, '#2563eb');
}

function drawNeedle(ctx, x, y, len, angle, color) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.PI + angle);
    ctx.beginPath(); ctx.moveTo(0, -2); ctx.lineTo(len, 0); ctx.lineTo(0, 2);
    ctx.fillStyle = color; ctx.fill(); ctx.restore();
}

function renderCapitals(community, containerId, side) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (!community) {
        // Global / Home Mode: Show Theoretical Definitions
        const defHeader = document.createElement('h3');
        defHeader.innerText = "Theoretical Definitions";
        defHeader.style.margin = "10px 0 20px 0";
        defHeader.style.fontSize = "0.9rem";
        defHeader.style.color = "var(--primary)";
        defHeader.style.textTransform = "uppercase";
        container.appendChild(defHeader);

        staticData.capitals.forEach(cap => {
            const defDiv = document.createElement('div');
            defDiv.className = 'info-card';
            defDiv.style.marginBottom = '15px';
            defDiv.style.borderLeft = `4px solid ${cap.color}`;
            defDiv.innerHTML = `
                <div style="font-weight: 700; color: ${cap.color}; margin-bottom: 5px;">${cap.name}</div>
                <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">${cap.description}</div>
            `;
            container.appendChild(defDiv);
        });
        return;
    }

    staticData.capitals.forEach(cap => {
        const capDiv = document.createElement('div');
        capDiv.className = 'capital-item';
        const indList = staticData.indicators[cap.id];
        let degraded = indList.some(i => {
            const g = community.gradings[i.id];
            return g && GRADE_VALUES[g.t1] < GRADE_VALUES[g.t0];
        });
        if (degraded) capDiv.classList.add('capital-degraded');
        capDiv.innerHTML = `<div class="capital-header" style="background: ${cap.color}"><span>${cap.name}</span><span class="chevron">▼</span></div><div class="indicators-list"></div>`;
        const list = capDiv.querySelector('.indicators-list');

        indList.forEach(ind => {
            const grad = community.gradings[ind.id];
            const isDeg = grad ? GRADE_VALUES[grad.t1] < GRADE_VALUES[grad.t0] : false;
            const indDiv = document.createElement('div');
            indDiv.className = `indicator-item ${isDeg ? 'indicator-degraded' : ''}`;
            const related = activities.filter(a => a.communityIds.includes(community.id) && a.indicatorIds.includes(ind.id));
            indDiv.innerHTML = `
                <div class="indicator-header"><span>${ind.name}</span><span class="${isDeg ? 'grade-degraded' : ''}">T0: ${grad ? grad.t0 : 'N/A'} <span class="arrow">→</span> T1: ${grad ? grad.t1 : 'N/A'}</span></div>
                <div class="activity-sublist"><strong>Contributing Activities:</strong><ul>${related.length ? related.map(a => `<li>${a.name}</li>`).join('') : '<li>No specific activities recorded</li>'}</ul></div>
            `;

            indDiv.onclick = (e) => {
                e.stopPropagation();
                const sub = indDiv.querySelector('.activity-sublist');
                const isCurrentlyVisible = sub.style.display === 'block';

                if (accordionState[side]) {
                    // Accordion: Collapse all other indicators in this capital
                    list.querySelectorAll('.activity-sublist').forEach(s => s.style.display = 'none');
                }

                // Toggle current
                sub.style.display = isCurrentlyVisible ? 'none' : 'block';
            };
            list.appendChild(indDiv);
        });

        capDiv.querySelector('.capital-header').onclick = () => {
            const isCurrentlyVisible = list.style.display === 'block';

            if (accordionState[side]) {
                // Accordion: Collapse all other capitals in this container
                container.querySelectorAll('.indicators-list').forEach(l => l.style.display = 'none');
                container.querySelectorAll('.chevron').forEach(c => c.innerText = '▼');
            }

            // Toggle current
            list.style.display = isCurrentlyVisible ? 'none' : 'block';
            capDiv.querySelector('.chevron').innerText = isCurrentlyVisible ? '▼' : '▲';
        };
        container.appendChild(capDiv);
    });
}
