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
  edit_proposed_plan: string;
  validate_proposed_plan: string;
  proposed_plan: string;
  edit_approved_plan: string;
  validate_approved_plan: string;
  approved_plan: string;
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
      edit_proposed_plan: 'Edit proposed plan',
      validate_proposed_plan: 'Validate proposed plan',
      proposed_plan: 'PROPOSED PLAN',
      edit_approved_plan: 'Edit approved plan',
      validate_approved_plan: 'Validate approved plan',
      approved_plan: 'APPROVED PLAN',
      plandata_logo: 'Plandata.dk'
    },
    da: {
      edit_proposed_plan: 'Rediger planforslag',
      validate_proposed_plan: 'Valider planforslag',
      proposed_plan: 'INDRAPPORTERET PLANFORSLAG',
      edit_approved_plan: 'Rediger vedtaget plan',
      validate_approved_plan: 'Valider vedtaget plan',
      approved_plan: 'VEDTAGET PLAN',
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
      edit_proposed_plan: 'Edit proposed plan',
      validate_proposed_plan: 'Validate proposed plan',
      proposed_plan: 'PROPOSED PLAN',
      edit_approved_plan: 'Edit approved plan',
      validate_approved_plan: 'Validate approved plan',
      approved_plan: 'APPROVED PLAN',
      plandata_logo: 'Plandata.dk'
    };
  }

  isTimelineActive(timelineId: string): boolean {
    return this.stateTimelineMap[this.state] === timelineId;
  }

  isStateGroupActive(groupId: string): boolean {
    return this.stateGroupMap[this.state] === groupId;
  }

  getEditProposedLine1(): string {
    return this.strings.edit_proposed_plan.split(' ')[0];
  }

  getEditProposedLine2(): string {
    return this.strings.edit_proposed_plan.split(' ').slice(1).join(' ');
  }

  getValidateProposedLine1(): string {
    return this.strings.validate_proposed_plan.split(' ')[0];
  }

  getValidateProposedLine2(): string {
    return this.strings.validate_proposed_plan.split(' ').slice(1).join(' ');
  }

  getProposedPlanLine1(): string {
    return this.strings.proposed_plan.split(' ')[0];
  }

  getProposedPlanLine2(): string {
    return this.strings.proposed_plan.split(' ').slice(1).join(' ');
  }

  getEditApprovedLine1(): string {
    return this.strings.edit_approved_plan.split(' ')[0];
  }

  getEditApprovedLine2(): string {
    return this.strings.edit_approved_plan.split(' ').slice(1).join(' ');
  }

  getValidateApprovedLine1(): string {
    return this.strings.validate_approved_plan.split(' ')[0];
  }

  getValidateApprovedLine2(): string {
    return this.strings.validate_approved_plan.split(' ').slice(1).join(' ');
  }

  getApprovedPlanLine1(): string {
    return this.strings.approved_plan.split(' ')[0];
  }

  getApprovedPlanLine2(): string {
    return this.strings.approved_plan.split(' ').slice(1).join(' ');
  }
}
