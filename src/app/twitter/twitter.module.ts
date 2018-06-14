import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TwitterFormComponent } from './twitter-form/twitter-form.component';
import { TwitterViewComponent } from './twitter-view/twitter-view.component';
import { TwitterService } from './twitter.service';
import { SearchOperatorsTableComponent } from './search-operators-table/search-operators-table.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TwitterViewComponent, TwitterFormComponent, SearchOperatorsTableComponent],
  exports: [TwitterViewComponent, TwitterFormComponent],
  providers: [TwitterService],
  entryComponents: [SearchOperatorsTableComponent]
})
export class TwitterModule { }
