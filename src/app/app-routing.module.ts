import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationViewComponent } from './presentations/presentation-view/presentation-view.component';
import { CreateOrOpenTextComponent } from './presentations/create-or-open-text.component';

const routes: Routes = [
  {path: 'presentation/:id', component: PresentationViewComponent},
  {path: 'presentation/:id/:editing', component: PresentationViewComponent},
  {path: '', component: CreateOrOpenTextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
