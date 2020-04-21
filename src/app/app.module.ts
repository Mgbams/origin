import { ShippingModule } from './shipping/shipping.module';
import { CartModule } from './cart/cart.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { AccountInfoModule } from './account-info/account-info.module';
import { AccountSetupModule } from './account-setup/account-setup.module';
import { ReturnPolicyModule } from './return-policy/return-policy.module';
import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';
import { TermsAndConditionsModule } from './terms-and-conditions/terms-and-conditions.module';
import { RegistrationLoginModule } from './registration-login/registration-login.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedRegistrationModule } from './completed-registration/completed-registration.module';
import { CategoriesModule } from './administration/categories/categories.module';
import { AddProductsModule } from './administration/add-products/add-products.module';
import { AddSupplierModule } from './administration/add-supplier/add-supplier.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    SharedModule,
    RegistrationLoginModule,
    AccountSetupModule,
    AccountInfoModule,
    ContactInfoModule,
    TermsAndConditionsModule,
    ReturnPolicyModule,
    PrivacyPolicyModule,
    ForgotPasswordModule,
    ProductDetailsModule,
    CompletedRegistrationModule,
    CartModule,
    ShippingModule,
    CategoriesModule,
    AddProductsModule,
    AddSupplierModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
