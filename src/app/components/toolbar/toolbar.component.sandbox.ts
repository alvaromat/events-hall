import { sandboxOf } from 'angular-playground';
import { ToolbarComponent } from './toolbar.component';
import { MaterialComponentsModule } from '../../material-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { ElectronService } from '../../providers/electron.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default sandboxOf(ToolbarComponent, {
  imports:
  [
    MaterialComponentsModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ ElectronService ]
})
.add('Toolbar alone',  {
  template: '<app-toolbar></app-toolbar>'
});
