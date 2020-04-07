import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public productLists;

  constructor( private cartService: CartService) { }

  ngOnInit() {
    this.productLists = this.cartService.getProducts();
  }

}
