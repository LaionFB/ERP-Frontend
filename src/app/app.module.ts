import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { HomeComponent } from './_home/home.component';
import { DeliveryDialogComponent } from './delivery/dialogs/delivery/delivery.component';
import { DriverDialogComponent } from './delivery/dialogs/driver/driver.component';
import { ProductDialogComponent } from './delivery/dialogs/product/product.component';
import { ProductDialogComponent as ProductDialogComponent2 } from './inventory/dialogs/product/product.component';
import { PurchaseOrderDialogComponent } from './inventory/dialogs/purchase-order/purchase-order.component';
import { SaleOrderDialogComponent } from './inventory/dialogs/sale-order/sale-order.component';
import { ProductDialogComponent as ProductDialogComponent3 } from './purchase/dialogs/product/product.component';
import { ProviderDialogComponent } from './purchase/dialogs/provider/provider.component';
import { PurchaseDialogComponent } from './purchase/dialogs/purchase/purchase.component';
import { PurchaseOrderDialogComponent as PurchaseOrderDialogComponent2 } from './purchase/dialogs/purchase-order/purchase-order.component';
import { QuotationDialogComponent } from './purchase/dialogs/quotation/quotation.component';
import { CustomerDialogComponent } from './sales/dialogs/customer/customer.component';
import { CustomerServiceDialogComponent } from './sales/dialogs/customer-service/customer-service.component';
import { ProductDialogComponent as ProductDialogComponent4 } from './sales/dialogs/product/product.component';
import { QuotationDialogComponent as QuotationDialogComponent2 } from './sales/dialogs/quotation/quotation.component';
import { SaleOrderDialogComponent as SaleOrderDialogComponent2 } from './sales/dialogs/sale-order/sale-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeliveryDialogComponent,
    DriverDialogComponent,
    ProductDialogComponent,
    ProductDialogComponent2,
    PurchaseOrderDialogComponent,
    SaleOrderDialogComponent,
    ProductDialogComponent3,
    ProviderDialogComponent,
    PurchaseDialogComponent,
    PurchaseOrderDialogComponent2,
    QuotationDialogComponent,
    CustomerDialogComponent,
    CustomerServiceDialogComponent,
    ProductDialogComponent4,
    QuotationDialogComponent2,
    SaleOrderDialogComponent2,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    DeliveryDialogComponent,
    DriverDialogComponent,
    ProductDialogComponent,
    ProductDialogComponent2,
    PurchaseOrderDialogComponent,
    SaleOrderDialogComponent,
    ProductDialogComponent3,
    ProviderDialogComponent,
    PurchaseDialogComponent,
    PurchaseOrderDialogComponent2,
    QuotationDialogComponent,
    CustomerDialogComponent,
    CustomerServiceDialogComponent,
    ProductDialogComponent4,
    QuotationDialogComponent2,
    SaleOrderDialogComponent2,
  ]
})
export class AppModule { }
