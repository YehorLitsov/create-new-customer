import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardHeaderComponent } from './customer-dashboard-header.component';



@NgModule({
  declarations: [
    CustomerDashboardHeaderComponent
  ],
  exports: [
    CustomerDashboardHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerDashboardHeaderModule { }
