import { Component, OnInit } from '@angular/core';
import { InventoryProvider } from './inventory.provider';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrderDialogComponent } from './dialogs/purchase-order/purchase-order.component';
import { SaleOrderDialogComponent } from './dialogs/sale-order/sale-order.component';
import { ProductDialogComponent } from './dialogs/product/product.component';

@Component({
  selector: 'inventory-root',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
  private saleOrders = [];
  private products = [];
  private purchaseOrders = [];

  constructor(private provider: InventoryProvider, public dialog: MatDialog){}

  ngOnInit(){
    this.saleOrders = this.provider.getSaleOrders();
    this.products = this.provider.getProducts();
    this.purchaseOrders = this.provider.getPurchaseOrders();
  }
  
  saveSaleOrder(data?){
    const dialogRef = this.dialog.open(SaleOrderDialogComponent, {
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
}
