import { Component, OnInit, Input } from '@angular/core';
import { Item } from "./item";
import { ItemService } from "./item.service";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //@Input() item: Item;
  items: Item[];

/*
 *  item: Item = {
    ID: 1,
    c_item_id: "",
    c_item_id_link: "",
    c_title: "Item 1",
    c_subtitle: "",
    c_index: "",
    c_type: "",
    c_category: "",
    c_subcategory: "",
    b_attach_item: false,
    c_author: "",
    c_co_author: "",
    c_editor: "",
    c_language: "",
    c_keyword: "",
    i_status: 0,
    c_statusno_reason: "",
    i_out_times: 0,
    c_ISBN: "",
    c_subject: "",
    c_publisher: "",
    b_translate: false,
    c_original_language: "",
    i_difficult_level: 0,
    c_edition: "",
    i_pages: 0,
    m_introduction: "",
    c_vendor: "",
    c_country: "",
    d_publish: null,
    c_reference_No: "",
    c_location: "",
    d_purchased: null,
    u_price: 0,
    f_value: null,
    i_rating: 0,
    c_picture: "",
    c_user_ID: "",
    d_checkout: null,
    d_due: null,
    i_renew: 0,
    c_rem: "",
    c_mem_id: "",
    c_centre: "",
    c_checkout_auth: "",
    c_checkout_type: "",
    d_expired: null,
    c_donator: "",
    d_broken: null,
    c_broken_reason: "",
    c_broken_respon: "",
    c_broken_refno: "",
    d_maint_from: null,
    d_maint_to: null,
    c_maint_compname: "",
    c_maint_comptel: "",
    c_maint_compadd: "",
    c_maint_compweb: "",
    c_maint_compemail: "",
    c_maint_rem: "",
    b_maint_rem1: false,
    b_maint_rem2: false,
    b_maint_rem3: false,
    b_maint_rem4: false,
    b_maint_rem5: false,
    b_maint_rem6: false,
    c_out_rem: "",
    School_ID: ""
  };
*/

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  getItem(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  ngOnInit() {
    this.getItems();
  }

  goBack(): void {
    this.location.back();
  }

}
