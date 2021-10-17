import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardBoardComponent } from './customer-dashboard-board.component';



@NgModule({
  declarations: [
    CustomerDashboardBoardComponent
  ],
  exports: [
    CustomerDashboardBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerDashboardBoardModule { }
