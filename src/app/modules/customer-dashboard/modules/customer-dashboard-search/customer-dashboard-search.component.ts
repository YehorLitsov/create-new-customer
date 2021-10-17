import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-dashboard-search',
  templateUrl: './customer-dashboard-search.component.html',
  styleUrls: ['./customer-dashboard-search.component.scss']
})
export class CustomerDashboardSearchComponent implements OnInit {
  @Input() placeholder = 'Search for a Customer';

  constructor() { }

  ngOnInit(): void {
  }

}
