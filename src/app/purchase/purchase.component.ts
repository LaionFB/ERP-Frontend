import { Component, OnInit } from '@angular/core';
import { PurchaseProvider } from './purchase.provider';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrderDialogComponent } from './dialogs/purchase-order/purchase-order.component';
import { ProductDialogComponent } from './dialogs/product/product.component';
import { QuotationDialogComponent } from './dialogs/quotation/quotation.component';
import { PurchaseDialogComponent } from './dialogs/purchase/purchase.component';
import { ProviderDialogComponent } from './dialogs/provider/provider.component';

@Component({
  selector: 'purchase-root',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})

export class PurchaseComponent implements OnInit {
  private purchaseOrders = [];
  private quotations = [];
  private purchases = [];
  private providers = [];
  private products = [];

  constructor(private provider: PurchaseProvider, public dialog: MatDialog){}
  
  ngOnInit(){
    this.purchaseOrders = this.provider.getPurchaseOrders();
    this.quotations = this.provider.getQuotations();
    this.purchases = this.provider.getPurchases();
    this.providers = this.provider.getProviders();
    this.products = this.provider.getProducts();
  }  

  savePurchaseOrder(data?){
    const dialogRef = this.dialog.open(PurchaseOrderDialogComponent, {
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        try{
          //...
          console.log('salvou', result)
        } catch(e){
          console.error('erro', e)
        }
      }
    });
  }

  saveProduct(data?){
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        try{
          //...
          console.log('salvou', result)
        } catch(e){
          console.error('erro', e)
        }
      }
    });
  }

  saveQuotation(data?){
    const dialogRef = this.dialog.open(QuotationDialogComponent, {
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        try{
          //...
          console.log('salvou', result)
        } catch(e){
          console.error('erro', e)
        }
      }
    });
  }

  savePurchase(data?){
    const dialogRef = this.dialog.open(PurchaseDialogComponent, {
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        try{
          //...
          console.log('salvou', result)
        } catch(e){
          console.error('erro', e)
        }
      }
    });
  }

  saveProvider(data?){
    const dialogRef = this.dialog.open(ProviderDialogComponent, {
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        try{
          //...
          console.log('salvou', result)
        } catch(e){
          console.error('erro', e)
        }
      }
    });
  }
}
