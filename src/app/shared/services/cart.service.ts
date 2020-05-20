import { AllProducts } from './../models/allProducts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.cart;
  } 

  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p[0].product_id === product[0].product_id) {
        p.units_on_order += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.units_on_order = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p[0].product_id === product[0].product_id) {
        p.units_on_order -= 1;
        if (p.units_on_order === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p[0].product_id === product[0].product_id) {
        this.cartItemCount.next(this.cartItemCount.value - p.units_on_order);
        this.cart.splice(index, 1);
      }
    }
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

}
