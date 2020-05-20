import { CartModalComponent } from './cart-modal/cart-modal.component';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AllProducts } from './../shared/models/allProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart: AllProducts[] = [];
  public products;
  public cartItemCount: BehaviorSubject<number>;
 
   // @ViewChild('cart', {static: false, read: ElementRef}) fab: ElementRef;
 
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private toastController: ToastController
    ) {}
 
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    console.log('this is my cart', this.cart);
    // this.animateCSS('tada');
  }

 /*  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  } */

  async openCart() {
   // this.animateCSS('bounceOutLeft', true);

    const modal = await this.modalCtrl.create({
      component: CartModalComponent,
      cssClass: 'cart-modal'
    });
   /*  modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    }); */
    modal.present();
  }
 
 /* animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }*/

  getTotal() {
    return this.cart.reduce((i, j) => i + j[0].product_price * j.units_on_order, 0);
  }

  removeItem(product) {
    this.cartService.removeProduct(product);
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
      this.cartService.addProduct(product);
   // use the method toFixed(2) to fix the price to 2 decimal places
      product.product_price =  (product.unit_price * product.units_on_order).toFixed(2);
  }

  reduceQuantity(product, index) {
    if ( product.units_on_order > 1) {
      this.cartService.decreaseProduct(product);
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
