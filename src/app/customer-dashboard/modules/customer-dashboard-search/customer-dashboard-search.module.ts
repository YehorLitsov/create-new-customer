import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardSearchComponent } from './customer-dashboard-search.component';



@NgModule({
  declarations: [
    CustomerDashboardSearchComponent
  ],
  exports: [
    CustomerDashboardSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerDashboardSearchModule { }
