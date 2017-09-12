import { Injectable } from '@angular/core';
import { Item } from './item-model';
import { ITEMS } from './mock-items'; 

@Injectable()
export class ItemService {
    selectedItems: Item[] = [];

    // METHOD 1 - getItems(): accessed by STORE component to display store items. 
    getItems(): Item[] {
	return ITEMS;
    }

    // METHOD 2 - getSelectedItems(): accessed by CART component to display cart items. 
    getSelectedItems(): Item[] {
	return this.selectedItems;
    }	

    // METHOD 3 - addItem(): called by STORE component when "Add to Cart" button is clicked.
    addItem(id:number): void {
       let item = ITEMS.find(ob => ob.id === id);
       if (this.selectedItems.indexOf(item) < 0) {	   
	      this.selectedItems.push(item);
       }
    }

    // METHOD 4 - removeItem(): called by CART component when "Remove" button is clicked.
    removeItem(id:number): void {
       let item = this.selectedItems.find(ob => ob.id === id);
       let itemIndex = this.selectedItems.indexOf(item);
       this.selectedItems.splice(itemIndex, 1);
    }
} 