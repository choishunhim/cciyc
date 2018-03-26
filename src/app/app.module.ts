//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//app imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

//service imports
import { ItemService } from './item/item.service';
import { LogService } from './log/log.service';

//components
import { ItemListComponent } from './item/item-list/item-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemSearchComponent } from './item/item-search/item-search.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    DashboardComponent,
    ItemAddComponent,
    ItemSearchComponent,
    ItemDetailComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ItemService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
