import { NgModule } from '@angular/core';
import { ModuleFormComponent } from './module-form/module-form.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormsModule } from '../dynamic-forms/dynamic-forms.module';
import { ModuleQuestionsService } from './module-questions.service';
import { TwitterService } from '../twitter/twitter.service';
import { TwitterViewComponent } from '../twitter/twitter-view/twitter-view.component';


@NgModule({
  imports: [
    SharedModule,
    DynamicFormsModule
  ],
  declarations: [ModuleFormComponent, TwitterViewComponent],
  exports: [ModuleFormComponent, TwitterViewComponent],
  providers: [ModuleQuestionsService, TwitterService]
})
export class ModulesModule { }
