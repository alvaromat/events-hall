import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { PresentationEditorComponent } from './components/presentation-editor/presentation-editor.component';

const routes: Routes = [
  { path: 'edit/:id', component: PresentationEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
