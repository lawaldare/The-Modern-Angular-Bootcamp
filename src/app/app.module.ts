import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { PswdGeneratorComponent } from './pswd-generator/pswd-generator.component';
import { HomeComponent } from './home/home.component';
import { TypingComponent } from './typing/typing.component';
import { PipesComponent } from './pipes/pipes.component';
import { ConvertPipe } from './convert.pipe';
import { BeachComponent } from './beach/beach.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { OnlyForScreenDirective } from './only-for-screen.directive';
import { SearchBarComponent } from './wsearch/search-bar/search-bar.component';
import { PageListComponent } from './wsearch/page-list/page-list.component';
import { WsearchHomeComponent } from './wsearch/wsearch-home/wsearch-home.component';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    PswdGeneratorComponent,
    HomeComponent,
    TypingComponent,
    PipesComponent,
    ConvertPipe,
    BeachComponent,
    ClassDirective,
    TimesDirective,
    OnlyForScreenDirective,
    SearchBarComponent,
    PageListComponent,
    WsearchHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
