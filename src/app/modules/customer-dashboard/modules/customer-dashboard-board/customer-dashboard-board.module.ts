import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardBoardComponent } from './customer-dashboard-board.component';
import { CustomerDashboardCardComponent } from './components/customer-dashboard-card/customer-dashboard-card.component';



@NgModule({
  declarations: [
    CustomerDashboardBoardComponent,
    CustomerDashboardCardComponent
  ],
  exports: [
    CustomerDashboardBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerDashboardBoardModule { }
