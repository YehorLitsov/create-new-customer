import {ColorEnum} from "../enums/color.enum";

export interface CustomerInterface {
  icon: string,
  companyName: string;
  contactName: string;
  address: string;
  email: string;
  color: ColorEnum;
}
