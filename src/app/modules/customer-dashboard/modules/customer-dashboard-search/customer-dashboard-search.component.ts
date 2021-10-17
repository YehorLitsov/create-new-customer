import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-customer-dashboard-search',
  templateUrl: './customer-dashboard-search.component.html',
  styleUrls: ['./customer-dashboard-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDashboardSearchComponent {
  @Input() placeholder = 'Search for a Customer';
}
