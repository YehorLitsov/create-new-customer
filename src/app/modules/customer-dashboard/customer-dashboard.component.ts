import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDashboardComponent {}
