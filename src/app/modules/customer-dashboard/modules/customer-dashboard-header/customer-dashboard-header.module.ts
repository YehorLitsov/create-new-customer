import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardHeaderComponent } from './customer-dashboard-header.component';
import {TabHeaderModule} from "../../../../common/modules/tab-header/tab-header.module";



@NgModule({
  declarations: [
    CustomerDashboardHeaderComponent
  ],
  exports: [
    CustomerDashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    TabHeaderModule
  ]
})
export class CustomerDashboardHeaderModule { }
