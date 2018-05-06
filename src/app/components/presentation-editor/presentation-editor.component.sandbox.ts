import { sandboxOf } from 'angular-playground';
import { PresentationEditorComponent } from './presentation-editor.component';
import { MaterialComponentsModule } from '../../material-components.module';

export default sandboxOf(PresentationEditorComponent, {
  imports: [MaterialComponentsModule]
})
.add('Presentation-editor alone',  {
  template: '<app-presentation-editor></app-presentation-editor>'
});
