import { sandboxOf } from 'angular-playground';
import { PresentationListComponent } from './presentation-list.component';
import { ElectronService } from '../../providers/electron.service';
import { MatDialog } from '@angular/material';
import { NewPresentationDialogComponent } from './new-presentation-dialog/new-presentation-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { PresentationService } from '../presentation.service';

export default sandboxOf(PresentationListComponent, {
  imports: [SharedModule],
  providers: [PresentationService, ElectronService, MatDialog]
})
.add('Presentation-list alone',  {
  template: '<app-presentation-list></app-presentation-list>'
});
