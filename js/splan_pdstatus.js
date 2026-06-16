console.log('splan_pdstatus.js loaded');

var splan_pdstatus_svg = `
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 527.39 143.28">
  <line id="timeline" class="st2" x1="83.02" y1="57.47" x2="445.88" y2="57.47"/>  
  <g id="plandataborder">
    <path class="st0" d="M21.17,142.78h485.04c11.42,0,20.67-8.87,20.67-19.81s-9.26-19.81-20.67-19.81H21.17c-11.42,0-20.67,8.87-20.67,19.81s9.26,19.81,20.67,19.81Z"/>
  </g>
  <line id="state2timeline" class="st3" x1="83.02" y1="57.47" x2="114.74" y2="57.47"/>
  <line id="state3timeline" class="st3" x1="83.02" y1="57.47" x2="168.73" y2="57.47"/>
  <line id="state4timeline" class="st3" x1="83.02" y1="57.47" x2="331.6" y2="57.47"/>
  <line id="state5timeline" class="st3" x1="83.02" y1="57.47" x2="391.88" y2="57.35"/>
  <line id="state6timeline" class="st3" x1="83.02" y1="57.47" x2="445.88" y2="57.47"/>
  
  <line id="state3line" class="st2" x1="183.01" y1="102.07" x2="183.01" y2="16.03"/>
  <g id="state1">
    <circle class="st12" cx="68.74" cy="57.47" r="14.28"/>
    <circle class="st5" cx="68.74" cy="57.47" r="14.28"/>
  </g>
  <g id="state4">
    <rect class="st12" x="331.6" y="43.06" width="28.57" height="28.57" rx="5.88" ry="5.88"/>
    <rect class="st4" x="331.6" y="43.06" width="28.57" height="28.57" rx="5.88" ry="5.88"/>
  </g>
  <line id="state6line" class="st2" x1="460.16" y1="101.94" x2="460.16" y2="16.03"/>
  <rect id="state6" class="st7" x="445.88" y="43.06" width="28.57" height="28.57" rx="5.88" ry="5.88"/>
  <rect id="state2" class="st1" x="118" y="49.6" width="15.75" height="15.75" transform="translate(-3.77 105.84) rotate(-45)"/>
  <circle id="state3" class="st6" cx="183.01" cy="57.47" r="14.28"/>
  <rect id="state5" class="st1" x="395.15" y="49.48" width="15.75" height="15.75" transform="translate(77.49 301.78) rotate(-45)"/>
  <line id="state2line" class="st2" x1="125.87" y1="46.34" x2="125.87" y2="16.03"/>
  <line id="state5line" class="st2" x1="403.02" y1="46.21" x2="403.02" y2="15.9"/>
  <line id="state1line" class="st2" x1="68.87" y1="43.83" x2="68.87" y2="16.03"/>
  <line id="state4line" class="st2" x1="346.02" y1="43.7" x2="346.02" y2="16.03"/>
  <g id="state3text" class="st9">
    <text class="st8" transform="translate(130.08 120.06)"><tspan x="0" y="0">PROPOSED PLAN</tspan></text>
    <text class="st8" transform="translate(156.85 134.9)"><tspan x="0" y="0">Reported</tspan></text>
    <text class="st10" transform="translate(165 10.56)"><tspan x="0" y="0">Report</tspan></text>
  </g>
  <text id="state2text" class="st10" transform="translate(104.53 10.43)"><tspan x="0" y="0">Validate</tspan></text>
  <text id="state1text" class="st10" transform="translate(58.3 10.3)"><tspan x="0" y="0">Edit</tspan></text>
  <g id="state6text" class="st9">
    <text class="st8" transform="translate(407.87 121.13)"><tspan x="0" y="0">APPROVED PLAN</tspan></text>
    <text class="st8" transform="translate(433.21 135.53)"><tspan x="0" y="0">Reported</tspan></text>
  </g>
  <text id="state4text" class="st10" transform="translate(335.55 10.3)"><tspan x="0" y="0">Edit</tspan></text>
  <g id="plandatalogotext" class="st9">
    <text class="st11" transform="translate(42.98 127.94)"><tspan x="0" y="0">Plandata.dk</tspan></text>
  </g>
  <text id="state5text" class="st10" transform="translate(381.34 10.3)"><tspan x="0" y="0">Validate</tspan></text>
  <text id="state6text1" data-name="state6text" class="st10" transform="translate(442.15 10.3)"><tspan x="0" y="0">Report</tspan></text>
  <path id="plandatalogocircle" class="st13" d="M20.54,107.24c-8.88,0-16.08,7.2-16.08,16.08s7.2,16.08,16.08,16.08,16.08-7.2,16.08-16.08-7.2-16.08-16.08-16.08ZM20.54,138.19c-8.21,0-14.87-6.66-14.87-14.87s6.66-14.87,14.87-14.87,14.87,6.66,14.87,14.87-6.66,14.87-14.87,14.87Z"/>
  <path id="plandatalogocrest" class="st13" d="M25.76,128.9c1.33,0,2.72-1.59,3.45-3.07.78-1.58.84-3.01.16-3.9-.61-.8-1.69-1.1-3.22-.89-.09-.23-.21-.44-.36-.63-.45-.59-1.75-1.67-4.61-.13v-3.83h1.61v-1.31h-1.61v-1.42h-1.31v1.42h-1.61v1.31h1.61v3.83c-2.86-1.54-4.16-.46-4.61.13-.15.19-.27.4-.36.63-1.53-.2-2.61.09-3.22.89-.68.9-.62,2.32.16,3.9.73,1.48,2.13,3.07,3.45,3.07h10.47ZM15.31,127.6c-.53,0-1.6-.96-2.28-2.34-.54-1.09-.65-2.06-.29-2.53.29-.38.96-.51,1.91-.4-.07,1.63.67,3.64,2,5.27h-1.34,0ZM19.88,127.6h-1.44c-2.36-2.17-2.93-5.34-2.12-6.4.54-.71,1.87-.49,3.57.59v5.81h-.01ZM22.63,127.6h-1.44v-5.81c1.7-1.08,3.02-1.3,3.57-.59.81,1.06.24,4.23-2.12,6.4h-.01ZM28.04,125.25c-.68,1.38-1.75,2.34-2.28,2.34h-1.34c1.32-1.63,2.07-3.64,2-5.27.95-.11,1.63.02,1.91.4.36.47.25,1.44-.29,2.53h0Z"/>
  <rect id="plandatalogobar" class="st13" x="14.6" y="130.42" width="11.86" height="1.31"/>
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

    var state1text = container.querySelector('#state1text');
    if (state1text) {
        var tspan = state1text.querySelector('tspan');
        if (tspan) tspan.textContent = strings.step_edit_proposed_plan;
        var state1line = container.querySelector('#state1line');
        if (state1line) {
            var centerX = parseFloat(state1line.getAttribute('x1'));
            state1text.setAttribute('text-anchor', 'middle');
            state1text.setAttribute('transform', 'translate(' + centerX + ' 10.3)');
        }
    }

    var state2text = container.querySelector('#state2text');
    if (state2text) {
        var tspan = state2text.querySelector('tspan');
        if (tspan) tspan.textContent = strings.step_validate_proposed_plan;
    }

    var state3text = container.querySelector('#state3text');
    if (state3text) {
        var tspans = state3text.querySelectorAll('tspan');
        var texts = state3text.querySelectorAll('text');
        if (tspans.length >= 3) {
            var proposedParts = strings.plandata_proposed_plan.split(' ');
            tspans[0].textContent = proposedParts.slice(0, -1).join(' ');
            tspans[1].textContent = proposedParts.slice(-1)[0];
            tspans[2].textContent = strings.step_proposed_plan;
        }
        // Center all text rows on #state3line x
        var state3line = container.querySelector('#state3line');
        if (state3line && texts.length >= 3) {
            var centerX = parseFloat(state3line.getAttribute('x1'));
            texts[0].setAttribute('text-anchor', 'middle');
            texts[0].setAttribute('transform', 'translate(' + centerX + ' 120.06)');
            texts[1].setAttribute('text-anchor', 'middle');
            texts[1].setAttribute('transform', 'translate(' + centerX + ' 134.9)');
            texts[2].setAttribute('text-anchor', 'middle');
            texts[2].setAttribute('transform', 'translate(' + centerX + ' 10.56)');
        }
    }

    var state4text = container.querySelector('#state4text');
    if (state4text) {
        var tspan = state4text.querySelector('tspan');
        if (tspan) tspan.textContent = strings.step_edit_approved_plan;
        var state4line = container.querySelector('#state4line');
        if (state4line) {
            var centerX = parseFloat(state4line.getAttribute('x1'));
            state4text.setAttribute('text-anchor', 'middle');
            state4text.setAttribute('transform', 'translate(' + centerX + ' 10.3)');
        }
    }

    var state5text = container.querySelector('#state5text');
    if (state5text) {
        var tspan = state5text.querySelector('tspan');
        if (tspan) tspan.textContent = strings.step_validate_approved_plan;
    }

    var state6text = container.querySelector('#state6text');
    if (state6text) {
        var tspans = state6text.querySelectorAll('tspan');
        var texts = state6text.querySelectorAll('text');
        if (tspans.length >= 2) {
            var approvedParts = strings.plandata_approved_plan.split(' ');
            tspans[0].textContent = approvedParts.slice(0, -1).join(' ');
            tspans[1].textContent = approvedParts.slice(-1)[0];
        }
        // Center all text rows on #state6line x
        var state6line = container.querySelector('#state6line');
        if (state6line && texts.length >= 2) {
            var centerX = parseFloat(state6line.getAttribute('x1'));
            texts[0].setAttribute('text-anchor', 'middle');
            texts[0].setAttribute('transform', 'translate(' + centerX + ' 121.13)');
            texts[1].setAttribute('text-anchor', 'middle');
            texts[1].setAttribute('transform', 'translate(' + centerX + ' 135.53)');
        }
    }

    var state6text1 = container.querySelector('#state6text1');
    if (state6text1) {
        var tspan = state6text1.querySelector('tspan');
        if (tspan) tspan.textContent = strings.step_approved_plan;
        var state6line = container.querySelector('#state6line');
        if (state6line) {
            var centerX = parseFloat(state6line.getAttribute('x1'));
            state6text1.setAttribute('text-anchor', 'middle');
            state6text1.setAttribute('transform', 'translate(' + centerX + ' 10.3)');
        }
    }

    var plandatalogotext = container.querySelector('#plandatalogotext');
    if (plandatalogotext) {
        var tspan = plandatalogotext.querySelector('tspan');
        if (tspan) tspan.textContent = strings.plandata_logo;
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

    var stateLineIds = ['state1line', 'state2line', 'state3line', 'state4line', 'state5line', 'state6line'];
    var activeLineId = activeGroup + 'line';
    stateLineIds.forEach(function(id) {
        var el = container.querySelector('#' + id);
        if (el) {
            if (id === activeLineId) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    });

    var stateTextIds = ['state1text', 'state2text', 'state3text', 'state4text', 'state5text', 'state6text', 'state6text1'];
    var activeTextId = activeGroup + 'text';
    stateTextIds.forEach(function(id) {
        var el = container.querySelector('#' + id);
        if (el) {
            if (id === activeTextId || (activeGroup === 'state6' && id === 'state6text1')) {
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