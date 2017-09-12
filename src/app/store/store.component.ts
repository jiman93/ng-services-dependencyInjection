import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item-model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'store-app',
  templateUrl: './store.component.html', 
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit { 
   storeItems: Item[] = [];
   // storeItems array that will be iterated in the template

   constructor(private itemService: ItemService) { }

   getStoreItems(): void {
        this.storeItems = this.itemService.getItems();
   }

   ngOnInit(): void {
        this.getStoreItems();
   }
   // display mock-up items on initilize

   addItemInCart(id:number): void {
	this.itemService.addItem(id);
   }
   // "click event" method that will add an item to the cart. 
   // refer addItem() method inside item.service to see the logics.
} 