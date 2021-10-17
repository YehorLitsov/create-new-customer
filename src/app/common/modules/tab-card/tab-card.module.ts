import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabCardComponent } from './tab-card.component';



@NgModule({
  declarations: [
    TabCardComponent
  ],
  exports: [
    TabCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TabCardModule { }
