import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

export type PdStatus =
  | 'edit_proposed_plan'
  | 'validate_proposed_plan'
  | 'proposed_plan_in_plandata'
  | 'edit_approved_plan'
  | 'validate_approved_plan'
  | 'approved_plan_in_plandata';

export type PdLanguage = 'en' | 'da';

interface LanguageStrings {
  step_edit_proposed_plan: string;
  step_validate_proposed_plan: string;
  step_proposed_plan: string;
  step_edit_approved_plan: string;
  step_validate_approved_plan: string;
  step_approved_plan: string;
  plandata_proposed_plan: string;
  plandata_approved_plan: string;
  plandata_logo: string;
}

@Component({
  selector: 'splan-pdstatus',
  standalone: true,
  templateUrl: './splan-pdstatus.component.html',
  styleUrls: ['./splan-pdstatus.component.css']
})
export class SplanPdstatusComponent implements OnChanges {
  @Input() state: PdStatus = 'edit_proposed_plan';
  @Output() stateChanged = new EventEmitter<PdStatus>();
  @Input() language: PdLanguage = 'en';

  strings: LanguageStrings = this.getStrings('en');

  private languageStrings: Record<PdLanguage, LanguageStrings> = {
    en: {
      step_edit_proposed_plan: 'Edit',
      step_validate_proposed_plan: 'Validate',
      step_proposed_plan: 'Report',
      step_edit_approved_plan: 'Edit',
      step_validate_approved_plan: 'Validate',
      step_approved_plan: 'Report',
      plandata_proposed_plan: 'PROPOSED PLAN Reported',
      plandata_approved_plan: 'APPROVED PLAN Reported',
      plandata_logo: 'Plandata.dk'
    },
    da: {
      step_edit_proposed_plan: 'Rediger',
      step_validate_proposed_plan: 'Valider',
      step_proposed_plan: 'Indrapporter',
      step_edit_approved_plan: 'Rediger',
      step_validate_approved_plan: 'Valider',
      step_approved_plan: 'Indrapporter',
      plandata_proposed_plan: 'PLANFORSLAG Indrapporteret',
      plandata_approved_plan: 'VEDTAGET PLAN Indrapporteret',
      plandata_logo: 'Plandata.dk'
    }
  };

  private stateTimelineMap: Record<PdStatus, string> = {
    edit_proposed_plan: 'state1timeline',
    validate_proposed_plan: 'state2timeline',
    proposed_plan_in_plandata: 'state3timeline',
    edit_approved_plan: 'state4timeline',
    validate_approved_plan: 'state5timeline',
    approved_plan_in_plandata: 'state6timeline'
  };

  private stateGroupMap: Record<PdStatus, string> = {
    edit_proposed_plan: 'state1',
    validate_proposed_plan: 'state2',
    proposed_plan_in_plandata: 'state3',
    edit_approved_plan: 'state4',
    validate_approved_plan: 'state5',
    approved_plan_in_plandata: 'state6'
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['language']) {
      this.strings = this.getStrings(this.language);
    }
    if (changes['state']) {
      this.stateChanged.emit(this.state);
    }
  }

  private getStrings(language: PdLanguage): LanguageStrings {
    return this.languageStrings?.[language] ?? this.languageStrings?.['en'] ?? {
      step_edit_proposed_plan: 'Edit',
      step_validate_proposed_plan: 'Validate',
      step_proposed_plan: 'Report',
      step_edit_approved_plan: 'Edit',
      step_validate_approved_plan: 'Validate',
      step_approved_plan: 'Report',
      plandata_proposed_plan: 'PROPOSED PLAN Reported',
      plandata_approved_plan: 'APPROVED PLAN Reported',
      plandata_logo: 'Plandata.dk'
    };
  }

  isTimelineActive(timelineId: string): boolean {
    return this.stateTimelineMap[this.state] === timelineId;
  }

  isStateGroupActive(groupId: string): boolean {
    return this.stateGroupMap[this.state] === groupId;
  }

  isTextActive(textId: string): boolean {
    var activeGroup = this.stateGroupMap[this.state];
    return textId === activeGroup + 'text' || (activeGroup === 'state6' && textId === 'state6text1');
  }

  getPlandataProposedLine1(): string {
    var parts = this.strings.plandata_proposed_plan.split(' ');
    return parts.slice(0, -1).join(' ');
  }

  getPlandataProposedLine2(): string {
    var parts = this.strings.plandata_proposed_plan.split(' ');
    return parts.slice(-1)[0];
  }

  getPlandataApprovedLine1(): string {
    var parts = this.strings.plandata_approved_plan.split(' ');
    return parts.slice(0, -1).join(' ');
  }

  getPlandataApprovedLine2(): string {
    var parts = this.strings.plandata_approved_plan.split(' ');
    return parts.slice(-1)[0];
  }
}
