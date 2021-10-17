import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-dashboard-header',
  templateUrl: './customer-dashboard-header.component.html',
  styleUrls: ['./customer-dashboard-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDashboardHeaderComponent {
}
