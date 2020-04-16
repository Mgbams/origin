import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public productLists;
  public quantity = 1;
  public total: number;

  constructor( 
    private toastController: ToastController,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.productLists = this.cartService.getProducts();
    this.totalPrice();
  }

  totalPrice() {
    if ( this.productLists.length > 0 ) {
      this.productLists.forEach((item, index) => {
      this.total = Number(( this.total + (item.units_on_order * item.unit_price)).toFixed(2));
      console.log('total', this.total);
      console.log('gained access when list is presesnt', this.total);
      return this.total;
      });
    } else {
      this.total = 0;
      console.log('total for the else part', this.total);
      return this.total;
    }
  }

  removeItem(index) {
    this.productLists.splice(index, 1);
    // Creating a toast that displays a message when the product is added to the cart
    const toast = this.toastController.create({
      message: 'successfully deleted',
      position: 'top',
      duration: 2000,
      cssClass: 'toast-bg',
      color: 'danger'
    });
    toast.then((toastMessage) => {
      toastMessage.present();
    });
  }

  increaseQuantity(product, index) {
   product.units_on_order++;
   // use the method toFixed(2) to fix the price to 2 decimal places
   product.product_price =  (product.unit_price * product.units_on_order).toFixed(2);
   // window.location.reload(); used to reload page
   console.log('the product is ', product);
  }

  reduceQuantity(product, index) {
    if ( product.units_on_order > 1) {
      product.units_on_order--;
      product.product_price = (product.unit_price * product.units_on_order).toFixed(2);
    } else {
      product.product_price = (product.unit_price * product.units_on_order).toFixed(2);
      const toast = this.toastController.create({
        message: '1 is the minimum quantity required',
        position: 'top',
        duration: 2000,
        cssClass: 'toast-bg',
        color: 'danger'
      });
      toast.then((toastMessage) => {
        toastMessage.present();
      });
    }
  }

}
