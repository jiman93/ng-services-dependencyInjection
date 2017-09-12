
import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item-model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'cart-app',
  templateUrl: './cart.component.html', 
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit { 
   cartItems: Item[] = [];
   constructor(private itemService: ItemService) { }

   getItemsForCart(): void {
        this.cartItems = this.itemService.getSelectedItems();
   }
   ngOnInit(): void {
        this.getItemsForCart();
   }
   //display selected cart items on initialize

   removeItemFromCart(id:number): void {
        this.itemService.removeItem(id);
   }
    // "click event" method that will remove the item from the cart. 
   // refer removeItem() method inside item.service to see the logics.
} 