import { Component, OnInit } from '@angular/core';
import { InventoryProvider } from './inventory.provider';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PurchaseOrderDialogComponent } from './dialogs/purchase-order/purchase-order.component';
import { SaleOrderDialogComponent } from './dialogs/sale-order/sale-order.component';
import { ProductDialogComponent } from './dialogs/product/product.component';

@Component({
  selector: 'inventory-root',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
  public saleOrders = [];
  public products = [];
  public purchaseOrders = [];

  constructor(private provider: InventoryProvider, private dialog: MatDialog, private toastr: ToastrService){}

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
          this.toastr.success('Salvo com sucesso!');
        } catch(e){
          this.toastr.error('Erro ao salvar!');
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
          this.toastr.success('Salvo com sucesso!');
        } catch(e){
          this.toastr.error('Erro ao salvar!');
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
          this.toastr.success('Salvo com sucesso!');
        } catch(e){
          this.toastr.error('Erro ao salvar!');
          console.error('erro', e)
        }
      }
    });
  }
}
