import { NgModule } from '@angular/core';
import { ModuleFormComponent } from './module-form/module-form.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormsModule } from '../dynamic-forms/dynamic-forms.module';
import { ModuleQuestionsService } from './module-questions.service';
import { TwitterService } from './twitter.service';
import { TwitterComponent } from './twitter/twitter.component';

@NgModule({
  imports: [
    SharedModule,
    DynamicFormsModule
  ],
  declarations: [ModuleFormComponent, TwitterComponent],
  exports: [ModuleFormComponent, TwitterComponent],
  providers: [ModuleQuestionsService, TwitterService]
})
export class ModulesModule { }
