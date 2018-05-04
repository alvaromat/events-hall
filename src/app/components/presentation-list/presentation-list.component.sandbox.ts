import { sandboxOf } from 'angular-playground';
import { PresentationListComponent } from './presentation-list.component';

export default sandboxOf(PresentationListComponent)
.add('Presentation-list alone',  {
  template: '<app-presentation-list></app-presentation-list>'
});
