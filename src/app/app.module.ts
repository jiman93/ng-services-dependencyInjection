import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {StoreComponent}  from './store/store.component';
import {CartComponent}  from './cart/cart.component';
import {AppComponent}  from './app.component';
import {ItemService} from './services/item.service';

@NgModule({
  imports: [     
        BrowserModule
  ],
  declarations: [
        AppComponent, 
	StoreComponent,
	CartComponent
  ],
  providers: [
        ItemService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 