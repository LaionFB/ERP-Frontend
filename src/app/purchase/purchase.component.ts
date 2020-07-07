import { Component, OnInit } from '@angular/core';
import { PurchaseProvider } from './purchase.provider';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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
  public purchaseOrders = [];
  public quotations = [];
  public purchases = [];
  public providers = [];
  public products = [];

  constructor(private provider: PurchaseProvider, private dialog: MatDialog, private toastr: ToastrService){}
  
  async ngOnInit(){
    this.purchaseOrders = await this.provider.getPurchaseOrders();
    this.quotations     = await this.provider.getQuotations();
    this.purchases      = await this.provider.getPurchases();
    this.providers      = await this.provider.getProviders();
    this.products       = await this.provider.getProducts();
  }  

  savePurchaseOrder(data?){
    const dialogRef = this.dialog.open(PurchaseOrderDialogComponent, {
      data: data ? JSON.parse(JSON.stringify(data)) : null
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        try{
          if(result.id)
            await this.provider.updatePurchaseOrder(result);
          else
            await this.provider.insertPurchaseOrder(result);
          this.toastr.success('Salvo com sucesso!');
          this.purchaseOrders = await this.provider.getPurchaseOrders();
        } catch(e){
          this.toastr.error(e.error);
          console.error('erro', e)
        }
      }
    });
  }

  saveProduct(data?){
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: data ? JSON.parse(JSON.stringify(data)) : null
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        try{
          if(result.id)
            await this.provider.updateProduct(result);
          else
            await this.provider.insertProduct(result);
          this.toastr.success('Salvo com sucesso!');
          this.products = await this.provider.getProducts();
        } catch(e){
          this.toastr.error(e.error);
          console.error('erro', e)
        }
      }
    });
  }

  saveQuotation(data?){
    const dialogRef = this.dialog.open(QuotationDialogComponent, {
      data: data ? JSON.parse(JSON.stringify(data)) : null
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        try{
          if(result.id)
            await this.provider.updateQuotation(result);
          else
            await this.provider.insertQuotation(result);
          this.toastr.success('Salvo com sucesso!');
          this.quotations = await this.provider.getQuotations();
          this.purchaseOrders = await this.provider.getPurchaseOrders();
        } catch(e){
          this.toastr.error(e.error);
          console.error('erro', e)
        }
      }
    });
  }

  savePurchase(data?){
    const dialogRef = this.dialog.open(PurchaseDialogComponent, {
      data: data ? JSON.parse(JSON.stringify(data)) : null
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        try{
          if(result.id)
            await this.provider.updatePurchase(result);
          else
            await this.provider.insertPurchase(result);
          this.toastr.success('Salvo com sucesso!');
          this.purchases = await this.provider.getPurchases();
          this.quotations = await this.provider.getQuotations();
          this.purchaseOrders = await this.provider.getPurchaseOrders();
        } catch(e){
          this.toastr.error(e.error);
          console.error('erro', e)
        }
      }
    });
  }

  saveProvider(data?){
    const dialogRef = this.dialog.open(ProviderDialogComponent, {
      data: data ? JSON.parse(JSON.stringify(data)) : null
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        try{
          if(result.id)
            await this.provider.updateProvider(result);
          else
            await this.provider.insertProvider(result);
          this.toastr.success('Salvo com sucesso!');
          this.providers = await this.provider.getProviders();
        } catch(e){
          this.toastr.error(e.error);
          console.error('erro', e)
        }
      }
    });
  }
  async deletePurchaseOrder(data){
    try{
      await this.provider.deletePurchaseOrder(data);
      this.purchaseOrders = await this.provider.getPurchaseOrders();
      this.toastr.success('Removido com sucesso!');
    } catch(e){
      this.toastr.error('Erro ao deletar!');
      console.error('erro', e);
    }
  }
  async deleteProduct(data){
    try{
      await this.provider.deleteProduct(data);
      this.products = await this.provider.getProducts();
      this.toastr.success('Removido com sucesso!');
    } catch(e){
      this.toastr.error('Erro ao deletar!');
      console.error('erro', e);
    }
  }
  async deleteQuotation(data){
    try{
      await this.provider.deleteQuotation(data);
      this.quotations = await this.provider.getQuotations();
      this.toastr.success('Removido com sucesso!');
    } catch(e){
      this.toastr.error('Erro ao deletar!');
      console.error('erro', e);
    }
  }
  async deletePurchase(data){
    try{
      await this.provider.deletePurchase(data);
      this.purchases = await this.provider.getPurchases();
      this.toastr.success('Removido com sucesso!');
    } catch(e){
      this.toastr.error('Erro ao deletar!');
      console.error('erro', e);
    }
  }
  async deleteProvider(data){
    console.log('a')
    try{
      await this.provider.deleteProvider(data);
      this.providers = await this.provider.getProviders();
      this.toastr.success('Removido com sucesso!');
    } catch(e){
      this.toastr.error('Erro ao deletar!');
      console.error('erro', e);
    }
  }
}
