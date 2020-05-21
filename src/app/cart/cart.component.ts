import { CartModalComponent } from './cart-modal/cart-modal.component';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AllProducts } from './../shared/models/allProducts';

declare let paypal: any;
/* Fake credit card generator website: http://ccardgenerator.com/generat-visa-card-numbers.php
* My default credit card details:
* Issuing network: Visa
* Card number: 4374487489797489
* prenom: Rihanna 
* Nom: Baker
* Adress: 5 rue helene boucher
* Country: france
* city: lyon 
* CVV: 775
* Exp: 04/23
* postal code: 69008
* telephone +33 09 87 76 66 68
* email: g@gmail.com
*/

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {
  public cart: AllProducts[] = [];
  public products;
  public cartItemCount: BehaviorSubject<number>;
  public paidFor = false;

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

  ngAfterViewInit(): void {
    this.loadExternalScript('https://www.paypalobjects.com/api/checkout.js').then(() => {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          production: '',
          sandbox: 'AY2WuPpZbWYBCoBoDqgppp7NlDl1QBj6-SRytmTGrCNaLa_X0A0BQS-poxq0-tkYww0hqUfH2fkQWftP'
        },
        commit: true,
        // customize button (optional)
        style: {
          size: 'small',
          color: 'gold',
          shape: 'pill',
        },
        locale: 'fr_FR',
        payment: (data, actions) => {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: this.getTotal(), currency: 'EUR' }
                }
              ]
            }
          });
        },
        onAuthorize: (data, actions) => {
          return actions.payment.execute().then((payment) => {
            // TODO
            window.alert('Thank you for your purchase');
            this.paidFor = true;
            this.cartService.clearCart(); // Clear carte after payment
            this.cartService.getCart();
            this.getTotal(); // clears the total as there would be nothing in it after clearing the carte above
            this.cartItemCount.next(this.cartItemCount.value * 0); // clear item counter
          });
        },
        onError: err => {
          console.log(err);
        }
      }, '#paypal');
    });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
  });
  }

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
