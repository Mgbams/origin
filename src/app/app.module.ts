import { ResetPasswordModule } from './reset-password/reset-password.module';
import { MyAccountModule } from './my-account/my-account.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { SoldesModule } from './soldes/soldes.module';
import { EditSubcategoryModule } from './administration/edit-subcategory/edit-subcategory.module';
import { AddSubcategoryModule } from './administration/add-subcategory/add-subcategory.module';
import { EditSuppliersModule } from './administration/edit-suppliers/edit-suppliers.module';
import { EditProductsModule } from './administration/edit-products/edit-products.module';
import { EditCustomersModule } from './administration/edit-customers/edit-customers.module';
import { EditCategoriesModule } from './administration/edit-categories/edit-categories.module';
import { AdministrationModule } from './administration/administration.module';
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
import { AccessoiresModule } from './kids/accessoires/accessoires.module';
import { JeansModule } from './kids/jeans/jeans.module';
import { ShirtsModule } from './kids/shirts/shirts.module';
import { ShortsModule } from './kids/shorts/shorts.module';
import { SneakersModule } from './kids/sneakers/sneakers.module';
import { KidsModule } from './kids/kids.module';
import { MenModule } from './men/men.module';
import { WomenModule } from './women/women.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    NgxPaginationModule,
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
    AdministrationModule,
    AddSupplierModule,
    EditCategoriesModule,
    EditCustomersModule,
    EditProductsModule,
    EditSuppliersModule,
    AddSubcategoryModule,
    EditSubcategoryModule,
    KidsModule,
    AccessoiresModule,
    JeansModule,
    ShirtsModule,
    ShortsModule,
    SneakersModule,
    MenModule,
    WomenModule,
    SoldesModule,
    AboutUsModule,
    ContactModule,
    MyAccountModule,
    ResetPasswordModule,
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
