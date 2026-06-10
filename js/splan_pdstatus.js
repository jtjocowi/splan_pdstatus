console.log('splan_pdstatus.js loaded');

var language_strings = {
    'en': {
        'edit_proposed_plan': 'Edit proposed plan',
        'validate_proposed_plan': 'Validate proposed plan',
        'proposed_plan': 'PROPOSED PLAN',
        'edit_approved_plan': 'Edit approved plan',
        'validate_approved_plan': 'Validate approved plan',
        'approved_plan': 'APPROVED PLAN',
        'plandata_logo': 'Plandata.dk'  
    },
    'da': {
        'edit_proposed_plan': 'Rediger planforslag',
        'validate_proposed_plan': 'Valider planforslag',
        'proposed_plan': 'INDRAPPORTERET PLANFORSLAG',
        'edit_approved_plan': 'Rediger vedtaget plan',
        'validate_approved_plan': 'Valider vedtaget plan',
        'approved_plan': 'VEDTAGET PLAN',
        'plandata_logo': 'Plandata.dk'  
    }
}

var splan_pdstatus_svg = `
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 175.61">
  <g id="plandataborder">
    <path class="st5" d="M23.9,170.44h464.75c10.94,0,19.81-8.87,19.81-19.81s-8.87-19.81-19.81-19.81H23.9c-10.94,0-19.81,8.87-19.81,19.81s8.87,19.81,19.81,19.81Z"/>
  </g>
  <line id="timeline" class="st2" x1="86.61" y1="85.13" x2="449.47" y2="85.13"/>
  <line id="state2timeline" class="st7" x1="86.61" y1="85.13" x2="118.33" y2="85.13"/>
  <line id="state3timeline" class="st7" x1="86.61" y1="85.13" x2="172.32" y2="85.13"/>
  <line id="state4timeline" class="st7" x1="86.61" y1="85.13" x2="335.19" y2="85.13"/>
  <line id="state5timeline" class="st7" x1="86.61" y1="85.13" x2="395.47" y2="85.01"/>
  <line id="state6timeline" class="st7" x1="86.61" y1="85.13" x2="449.47" y2="85.13"/>
  <g id="state1">
    <circle class="st12" cx="72.33" cy="85.13" r="14.28"/>
    <circle class="st6" cx="72.33" cy="85.13" r="14.28"/>
  </g>
  <g id="state4">
    <rect class="st12" x="335.19" y="70.72" width="28.57" height="28.57" rx="5.88" ry="5.88"/>
    <rect class="st1" x="335.19" y="70.72" width="28.57" height="28.57" rx="5.88" ry="5.88"/>
  </g>
  <rect id="state6" class="st8" x="449.47" y="70.72" width="28.57" height="28.57" rx="5.88" ry="5.88"/>
  <rect id="state2" class="st4" x="121.59" y="77.26" width="15.75" height="15.75" transform="translate(281.21 53.79) rotate(135)"/>
  <circle id="state3" class="st3" cx="186.6" cy="85.13" r="14.28"/>
  <rect id="state5" class="st4" x="398.74" y="77.13" width="15.75" height="15.75" transform="translate(754.24 -142.4) rotate(135)"/>
  <line id="state2line" class="st0" x1="129.46" y1="74" x2="129.46" y2="43.69"/>
  <line id="state5line" class="st0" x1="406.61" y1="73.87" x2="406.61" y2="43.56"/>
  <line id="state1line" class="st0" x1="72.46" y1="71.49" x2="72.46" y2="41.18"/>
  <line id="state3line" class="st0" x1="186.6" y1="129.73" x2="186.6" y2="99.42"/>
  <line id="state4line" class="st0" x1="349.61" y1="71.36" x2="349.61" y2="41.06"/>
  <line id="state6line" class="st0" x1="463.75" y1="129.6" x2="463.75" y2="99.29"/>
  <g id="state1text">
    <text class="st9" transform="translate(58.23 17.96)"><tspan x="0" y="0">Edit</tspan><tspan x="-27.69" y="14.4">proposed plan</tspan></text>
  </g>
  <text id="state3text" class="st10" transform="translate(151.77 148.16)"><tspan x="0" y="0">PROPOSED</tspan><tspan x="17.67" y="14.4">PLAN</tspan></text>
  <text id="state6text" class="st10" transform="translate(429.46 148.79)"><tspan x="0" y="0">APPROVED</tspan><tspan x="17.34" y="14.4">PLAN</tspan></text>
  <g id="state4text">
    <text class="st9" transform="translate(336.49 16.78)"><tspan x="0" y="0">Edit</tspan><tspan x="-27.69" y="14.4">approved plan</tspan></text>
  </g>
  <text id="state1text1" data-name="state1text" class="st9" transform="translate(127.8 18.09)"><tspan x="0" y="0">Validate</tspan><tspan x="0" y="14.4">proposed plan</tspan></text>
  <text id="plandatalogotext" class="st11" transform="translate(46.57 155.6)"><tspan x="0" y="0">Plandata.dk</tspan></text>
  <text id="state5text" class="st9" transform="translate(403.29 17.23)"><tspan x="0" y="0">Validate</tspan><tspan x="0" y="14.4">approved plan</tspan></text>
  <path id="plandatalogocircle" class="st13" d="M24.13,134.9c-8.88,0-16.08,7.2-16.08,16.08s7.2,16.08,16.08,16.08,16.08-7.2,16.08-16.08-7.2-16.08-16.08-16.08ZM24.13,165.85c-8.21,0-14.87-6.66-14.87-14.87s6.66-14.87,14.87-14.87,14.87,6.66,14.87,14.87-6.66,14.87-14.87,14.87Z"/>
  <path id="plandatalogocrest" class="st13" d="M29.35,156.56c1.33,0,2.72-1.59,3.45-3.07.78-1.58.84-3.01.16-3.9-.61-.8-1.69-1.1-3.22-.89-.09-.23-.21-.44-.36-.63-.45-.59-1.75-1.67-4.61-.13v-3.83h1.61v-1.31h-1.61v-1.42h-1.31v1.42h-1.61v1.31h1.61v3.83c-2.86-1.54-4.16-.46-4.61.13-.15.19-.27.4-.36.63-1.53-.2-2.61.09-3.22.89-.68.9-.62,2.32.16,3.9.73,1.48,2.13,3.07,3.45,3.07h10.45ZM18.9,155.26c-.53,0-1.6-.96-2.28-2.34-.54-1.09-.65-2.06-.29-2.53.29-.38.96-.51,1.91-.4-.07,1.63.67,3.64,2,5.27h-1.34ZM23.47,155.26h-1.44c-2.36-2.17-2.93-5.34-2.12-6.4.54-.71,1.87-.49,3.57.59v5.81ZM26.22,155.26h-1.44v-5.81c1.7-1.08,3.02-1.3,3.57-.59.81,1.06.24,4.23-2.12,6.4ZM31.63,152.91c-.68,1.38-1.75,2.34-2.28,2.34h-1.34c1.32-1.63,2.07-3.64,2-5.27.95-.11,1.63.02,1.91.4.36.47.25,1.44-.29,2.53Z"/>
  <rect id="plandatalogobar" class="st13" x="18.19" y="158.08" width="11.86" height="1.31"/>
</svg>
`;

var currentLanguage = 'en';
var currentState = 'edit_proposed_plan';

function updateSvgText(language) {
    currentLanguage = language;
    var strings = language_strings[language];
    if (!strings) return;

    var container = document.getElementById('splan_pdstatus');
    if (!container) return;

    var state1text = container.querySelector('#state1text text');
    if (state1text) {
        var parts = strings.edit_proposed_plan.split(' ');
        var tspans = state1text.querySelectorAll('tspan');
        tspans[0].textContent = parts[0];
        tspans[1].textContent = parts.slice(1).join(' ');
    }

    var state1text1 = container.querySelector('#state1text1');
    if (state1text1) {
        var parts = strings.validate_proposed_plan.split(' ');
        var tspans = state1text1.querySelectorAll('tspan');
        tspans[0].textContent = parts[0];
        tspans[1].textContent = parts.slice(1).join(' ');
    }

    var state3text = container.querySelector('#state3text');
    if (state3text) {
        var parts = strings.proposed_plan.split(' ');
        var tspans = state3text.querySelectorAll('tspan');
        tspans[0].textContent = parts[0];
        tspans[1].textContent = parts.slice(1).join(' ');
    }

    var state4text = container.querySelector('#state4text text');
    if (state4text) {
        var parts = strings.edit_approved_plan.split(' ');
        var tspans = state4text.querySelectorAll('tspan');
        tspans[0].textContent = parts[0];
        tspans[1].textContent = parts.slice(1).join(' ');
    }

    var state5text = container.querySelector('#state5text');
    if (state5text) {
        var parts = strings.validate_approved_plan.split(' ');
        var tspans = state5text.querySelectorAll('tspan');
        tspans[0].textContent = parts[0];
        tspans[1].textContent = parts.slice(1).join(' ');
    }

    var state6text = container.querySelector('#state6text');
    if (state6text) {
        var parts = strings.approved_plan.split(' ');
        var tspans = state6text.querySelectorAll('tspan');
        tspans[0].textContent = parts[0];
        tspans[1].textContent = parts.slice(1).join(' ');
    }

    var plandatalogotext = container.querySelector('#plandatalogotext');
    if (plandatalogotext) {
        var tspan = plandatalogotext.querySelector('tspan');
        tspan.textContent = strings.plandata_logo;
    }
}

function setLanguage(language) {
    updateSvgText(language);
}

function setState(state) {
    currentState = state;

    console.log('splan_pdstatus_state_changed', state);
    document.dispatchEvent(new CustomEvent('splan_pdstatus_state_changed', { detail: { state: state } }));

    var container = document.getElementById('splan_pdstatus');
    if (!container) return;

    var timelineIds = ['state1timeline','state2timeline', 'state3timeline', 'state4timeline', 'state5timeline', 'state6timeline'];
    var stateMap = {
        'edit_proposed_plan': 'state1timeline',
        'validate_proposed_plan': 'state2timeline',
        'proposed_plan_in_plandata': 'state3timeline',
        'edit_approved_plan': 'state4timeline',
        'validate_approved_plan': 'state5timeline',
        'approved_plan_in_plandata': 'state6timeline'
    };

    var stateGroupMap = {
        'edit_proposed_plan': 'state1',
        'validate_proposed_plan': 'state2',
        'proposed_plan_in_plandata': 'state3',
        'edit_approved_plan': 'state4',
        'validate_approved_plan': 'state5',
        'approved_plan_in_plandata': 'state6'
    };

    var activeTimeline = stateMap[state];
    var activeGroup = stateGroupMap[state];

    timelineIds.forEach(function(id) {
        var el = container.querySelector('#' + id);
        if (el) {
            if (id === activeTimeline) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    });

    var stateGroupIds = ['state1', 'state2', 'state3', 'state4', 'state5', 'state6'];
    stateGroupIds.forEach(function(id) {
        var el = container.querySelector('#' + id);
        if (el) {
            if (id === activeGroup) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('splan_pdstatus');
    if (container) {
        container.innerHTML = splan_pdstatus_svg;
        updateSvgText(currentLanguage);
        setState(currentState);
    }

    var languageSelect = document.querySelector('#splan_pdstatus_language_select select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }

    var stateButtons = document.querySelectorAll('#splan_pdstatus_state_select button');
    stateButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            setState(this.dataset.state);
        });
    });
});