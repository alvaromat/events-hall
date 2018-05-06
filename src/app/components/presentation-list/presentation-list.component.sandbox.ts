import { sandboxOf } from 'angular-playground';
import { PresentationListComponent } from './presentation-list.component';
import { MaterialComponentsModule } from '../../material-components.module';
import { PresentationService } from '../../providers/presentation.service';
import { ElectronService } from '../../providers/electron.service';

export default sandboxOf(PresentationListComponent, {
  imports: [MaterialComponentsModule],
  providers: [PresentationService, ElectronService]
})
.add('Presentation-list alone',  {
  template: '<app-presentation-list></app-presentation-list>'
});
