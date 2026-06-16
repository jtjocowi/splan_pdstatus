# splan_pdstatus

S-PLAN Plandata.dk Status indicator — an SVG-based visual component that displays the current workflow state of a plan in the Plandata.dk system.

## Overview

The component shows a timeline with 6 states representing the lifecycle of a plan:

| State | ID | Description |
|-------|----|-------------|
| 1 | `edit_proposed_plan` | Editing the proposed plan |
| 2 | `validate_proposed_plan` | Validating the proposed plan |
| 3 | `proposed_plan_in_plandata` | Proposed plan reported to Plandata.dk |
| 4 | `edit_approved_plan` | Editing the approved plan |
| 5 | `validate_approved_plan` | Validating the approved plan |
| 6 | `approved_plan_in_plandata` | Approved plan reported to Plandata.dk |

The active state is highlighted in orange on the timeline, shape, connecting line, and label text.

## Project Structure

```
├── index.html                     Demo/test page
├── css/
│   └── splan_pdstatus.css         Component styles (includes SVG styling + active states)
├── js/
│   ├── splan_pdstatus.js          Main component logic + inline SVG
│   ├── en.js                      English language strings
│   └── da.js                      Danish language strings
├── svg/
│   └── splan_pdstatus.svg         Source SVG file (reference/design source)
├── angular/
│   └── splan-pdstatus/            Angular standalone component
│       ├── splan-pdstatus.component.ts
│       ├── splan-pdstatus.component.html
│       └── splan-pdstatus.component.css
└── package.json
```

## Plain HTML/JS Usage

### 1. Include the files

Add the CSS and script files to your HTML page:

```html
<link rel="stylesheet" href="css/splan_pdstatus.css">

<!-- Container where the SVG will be rendered -->
<div id="splan_pdstatus"></div>

<!-- Language files (load before main script) -->
<script src="js/en.js"></script>
<script src="js/da.js"></script>

<!-- Main component script -->
<script src="js/splan_pdstatus.js"></script>
```

### 2. Set the state programmatically

Call `setState()` with one of the valid state IDs:

```javascript
setState('edit_proposed_plan');       // State 1
setState('validate_proposed_plan');   // State 2
setState('proposed_plan_in_plandata');// State 3
setState('edit_approved_plan');       // State 4
setState('validate_approved_plan');   // State 5
setState('approved_plan_in_plandata');// State 6
```

### 3. Set the language

Call `setLanguage()` with a language code:

```javascript
setLanguage('en'); // English
setLanguage('da'); // Danish
```

### 4. Listen for state changes

The component dispatches a custom event when the state changes:

```javascript
document.addEventListener('splan_pdstatus_state_changed', function(e) {
    console.log('New state:', e.detail.state);
});
```

## Angular Usage

### 1. Import the component

```typescript
import { SplanPdstatusComponent } from './splan-pdstatus/splan-pdstatus.component';
```

### 2. Use in a template

```html
<splan-pdstatus
  [state]="currentState"
  [language]="currentLanguage"
  (stateChanged)="onStateChanged($event)">
</splan-pdstatus>
```

### 3. Component inputs and outputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `state` | `PdStatus` | `'edit_proposed_plan'` | The current workflow state |
| `language` | `PdLanguage` | `'en'` | Display language (`'en'` or `'da'`) |
| `stateChanged` | `EventEmitter<PdStatus>` | — | Emitted when the state changes |

### 4. Types

```typescript
type PdStatus =
  | 'edit_proposed_plan'
  | 'validate_proposed_plan'
  | 'proposed_plan_in_plandata'
  | 'edit_approved_plan'
  | 'validate_approved_plan'
  | 'approved_plan_in_plandata';

type PdLanguage = 'en' | 'da';
```

## Adding a new language

1. Create a new file `js/<lang_code>.js` with the following structure:

```javascript
var language_strings = language_strings || {};
language_strings['<lang_code>'] = {
    "step_edit_proposed_plan": "...",
    "step_validate_proposed_plan": "...",
    "step_proposed_plan": "...",
    "step_edit_approved_plan": "...",
    "step_validate_approved_plan": "...",
    "step_approved_plan": "...",
    "plandata_proposed_plan": "... ...",
    "plandata_approved_plan": "... ... ...",
    "plandata_logo": "Plandata.dk"
};
```

2. Include the new script in your HTML before `splan_pdstatus.js`.

3. Call `setLanguage('<lang_code>')` to activate it.

## Updating the SVG

The source SVG is maintained in `svg/splan_pdstatus.svg`. When the SVG is updated:

1. Copy the SVG content (without the `<defs><style>` block) into the `splan_pdstatus_svg` variable in `js/splan_pdstatus.js`.
2. Update `css/splan_pdstatus.css` with any new/changed styles from the SVG's `<defs><style>` block, scoped under `#splan_pdstatus`.
3. Update the Angular template (`angular/splan-pdstatus/splan-pdstatus.component.html`) with the new SVG structure, adding Angular bindings as needed.

## Running the demo

Open `index.html` directly in a browser (works with `file://` protocol). Use the language dropdown and state buttons to test the component.
