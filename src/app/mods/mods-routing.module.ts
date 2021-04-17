import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModsHomeComponent } from './mods-home/mods-home.component';


const routes: Routes = [
  {
    path: "",
    component: ModsHomeComponent,
    children: [
      {
        path: 'collections',
        loadChildren: () => import('../collections/collections.module').then(m => m.CollectionsModule)
      },
      {
        path: 'elements',
        loadChildren: () => import('../elements/elements.module').then(m => m.ElementsModule)
      },
      {
        path: 'views',
        loadChildren: () => import('../views/views.module').then(m => m.ViewsModule)
      },
      {
        path: 'modds',
        loadChildren: () => import('../modds/modds.module').then(m => m.ModdsModule)
      },
      { path: "", pathMatch: "full", redirectTo: "elements" },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
