import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardFooterComponent } from './customer-dashboard-footer.component';



@NgModule({
  declarations: [
    CustomerDashboardFooterComponent
  ],
  exports: [
    CustomerDashboardFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerDashboardFooterModule { }
