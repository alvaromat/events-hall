import { sandboxOf } from 'angular-playground';
import { PresentationEditorComponent } from './presentation-editor.component';
import { SharedModule } from '../../shared/shared.module';

export default sandboxOf(PresentationEditorComponent, {
  imports: [SharedModule]
})
.add('Presentation-editor alone',  {
  template: '<app-presentation-editor></app-presentation-editor>'
});
