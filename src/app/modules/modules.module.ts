import { NgModule } from '@angular/core';
import { ModuleFormComponent } from './module-form/module-form.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormsModule } from '../dynamic-forms/dynamic-forms.module';
import { ModuleQuestionsService } from './module-questions.service';

@NgModule({
  imports: [
    SharedModule,
    DynamicFormsModule
  ],
  declarations: [ModuleFormComponent],
  exports: [ModuleFormComponent],
  providers: [ModuleQuestionsService]
})
export class ModulesModule { }
