import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './components/search/wrapper/wrapper.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {
    path: 'search',
    component: WrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
