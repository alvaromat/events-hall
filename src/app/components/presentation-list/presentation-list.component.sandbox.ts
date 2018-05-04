import { sandboxOf } from 'angular-playground';
import { PresentationListComponent } from './presentation-list.component';
import { MaterialComponentsModule } from '../../material-components.module';
import { PresentationService } from '../../providers/presentation.service';

export default sandboxOf(PresentationListComponent, {
  imports: [MaterialComponentsModule],
  providers: [PresentationService]
})
.add('Presentation-list alone',  {
  template: '<app-presentation-list></app-presentation-list>'
});
