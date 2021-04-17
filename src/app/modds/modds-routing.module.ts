import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModdsHomeComponent } from './modds-home/modds-home.component';


const routes: Routes = [
  { path: '', component: ModdsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModdsRoutingModule { }
