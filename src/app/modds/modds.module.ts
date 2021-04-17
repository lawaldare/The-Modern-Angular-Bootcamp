import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModdsRoutingModule } from './modds-routing.module';
import { ModdsHomeComponent } from './modds-home/modds-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [ModdsHomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModdsRoutingModule,
    SharedModule
  ]
})
export class ModdsModule { }
