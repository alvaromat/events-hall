import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionControlService } from './question-control.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule],
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  exports: [DynamicFormComponent],
  providers: [QuestionControlService]
})
export class DynamicFormsModule {}
