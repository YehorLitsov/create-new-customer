import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CustomerInterface} from "../../../../interfaces/customer.interface";
import {ColorEnum} from "../../../../enums/color.enum";

const generateCustomer = (
  icon: string,
  companyName: string,
  color: ColorEnum,
): CustomerInterface => ({
  icon,
  companyName,
  contactName: 'John Snow',
  address: '123 Main St, Philadelphia, PA 19147',
  email: 'jsnow@company.com',
  color
});

@Component({
  selector: 'app-customer-dashboard-board',
  templateUrl: './customer-dashboard-board.component.html',
  styleUrls: ['./customer-dashboard-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDashboardBoardComponent {
  arrayOfCustomers: CustomerInterface[] = [
    generateCustomer('amazon', 'Amazon', ColorEnum.Red),
    generateCustomer('amazon-pay', 'Amazon-pay', ColorEnum.Yellow),
    generateCustomer('adversal', 'Anchor', ColorEnum.Green),
    generateCustomer('amazon', 'Medical', ColorEnum.Blue),
    generateCustomer('airbnb', 'Airbnb', ColorEnum.Green),
    generateCustomer('amazon', 'Freshener', ColorEnum.Blue),
    generateCustomer('adversal', 'Adversal', ColorEnum.Green),
    generateCustomer('apple-pay', 'Apple-pay', ColorEnum.Yellow),
    generateCustomer('amazon-pay', 'Vegetables', ColorEnum.Red),
    generateCustomer('adversal', 'Discover', ColorEnum.Green),
    generateCustomer('airbnb', 'Mastercard', ColorEnum.Blue)
  ]
}
