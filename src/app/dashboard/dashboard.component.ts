import { Component, OnInit } from '@angular/core';
import { Item } from "../item/item";
import { ItemService } from "../item/item.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Item[];
  constructor() { }

  ngOnInit() {
  }

}
