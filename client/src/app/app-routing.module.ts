import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './components/search/wrapper/wrapper.component';

const routes: Routes = [
  { path: '**', component: WrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
