import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardBoardComponent } from './customer-dashboard-board.component';
import { CustomerDashboardCardComponent } from './components/customer-dashboard-card/customer-dashboard-card.component';
import { CustomerDashboardAddCustomerComponent } from './components/customer-dashboard-add-customer/customer-dashboard-add-customer.component';



@NgModule({
  declarations: [
    CustomerDashboardBoardComponent,
    CustomerDashboardCardComponent,
    CustomerDashboardAddCustomerComponent
  ],
  exports: [
    CustomerDashboardBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerDashboardBoardModule { }
