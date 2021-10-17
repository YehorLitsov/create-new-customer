import { Component } from '@angular/core';
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
  styleUrls: ['./customer-dashboard-board.component.scss']
})
export class CustomerDashboardBoardComponent {
  arrayOfCustomers: CustomerInterface[] = [
    generateCustomer('amazon', 'Amazon', ColorEnum.Red),
    generateCustomer('amazon-pay', 'Amazon-pay', ColorEnum.Yellow),
    generateCustomer('anchor', 'Anchor', ColorEnum.Green),
    generateCustomer('ambulance', 'Medical', ColorEnum.Blue),
    generateCustomer('airbnb', 'Airbnb', ColorEnum.Green),
    generateCustomer('air-freshener', 'Freshener', ColorEnum.Blue),
    generateCustomer('adversal', 'Adversal', ColorEnum.Green),
    generateCustomer('apple-pay', 'Apple-pay', ColorEnum.Yellow),
    generateCustomer('carrot', 'Vegetables', ColorEnum.Red),
    generateCustomer('discover', 'Discover', ColorEnum.Green),
    generateCustomer('mastercard', 'Mastercard', ColorEnum.Blue)
  ]
}
