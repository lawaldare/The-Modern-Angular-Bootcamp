import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BeachComponent } from './beach/beach.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { PswdGeneratorComponent } from './pswd-generator/pswd-generator.component';
import { TypingComponent } from './typing/typing.component';
import { WsearchHomeComponent } from './wsearch/wsearch-home/wsearch-home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'pswd-generator', component: PswdGeneratorComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'beaches', component: BeachComponent },
  {
    path: 'm',
    loadChildren: () => import('./mods/mods.module').then(m => m.ModsModule)
  },
  { path: 'wsearch', component: WsearchHomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
