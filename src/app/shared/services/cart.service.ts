import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productLists = [];
  constructor(private http: HttpClient) { }

  addProductToCart(product) {
    this.productLists.push(product);
  }

  getProducts() {
    return this.productLists;
  }

  clearCart() {
    this.productLists = [];
    return this.productLists;
  }

  getShippingPrices() {
    // return this.http.get('/assets/shipping.json');
  }
}
