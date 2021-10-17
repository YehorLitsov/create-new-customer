import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CustomerInterface} from "../../../../../../interfaces/customer.interface";

@Component({
  selector: 'app-customer-dashboard-card',
  templateUrl: './customer-dashboard-card.component.html',
  styleUrls: ['./customer-dashboard-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDashboardCardComponent {
  // @ts-ignore
  @Input() customerData: CustomerInterface;
}
