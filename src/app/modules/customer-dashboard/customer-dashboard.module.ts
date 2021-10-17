import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import {CustomerDashboardHeaderModule} from "./modules/customer-dashboard-header/customer-dashboard-header.module";
import {CustomerDashboardSearchModule} from "./modules/customer-dashboard-search/customer-dashboard-search.module";
import {CustomerDashboardBoardModule} from "./modules/customer-dashboard-board/customer-dashboard-board.module";
import {CustomerDashboardFooterModule} from "./modules/customer-dashboard-footer/customer-dashboard-footer.module";
import {TabCardModule} from "../../common/modules/tab-card/tab-card.module";


@NgModule({
  declarations: [
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule,
    CustomerDashboardHeaderModule,
    CustomerDashboardSearchModule,
    CustomerDashboardBoardModule,
    CustomerDashboardFooterModule,
    TabCardModule
  ]
})
export class CustomerDashboardModule { }
