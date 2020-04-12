import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public productLists;

  constructor( 
    private toastController: ToastController,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.productLists = this.cartService.getProducts();
  }

  removeItem(index) {
    this.productLists.splice(index, 1);
    // Creating a toast that displays a message when the product is added to the cart
    const toast = this.toastController.create({
      message: 'successfully deleted',
      position: 'top',
      duration: 3500,
      cssClass: 'toast-bg',
      color: 'danger'
    });
    toast.then((toastMessage) => {
      toastMessage.present();
    });
  }

}
