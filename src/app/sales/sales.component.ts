import { Component, OnInit } from '@angular/core';
import { SalesProvider } from './sales.provider';
import { MatDialog } from '@angular/material/dialog';
import { SaleOrderDialogComponent } from './dialogs/sale-order/sale-order.component';
import { ProductDialogComponent } from './dialogs/product/product.component';
import { QuotationDialogComponent } from './dialogs/quotation/quotation.component';
import { CustomerDialogComponent } from './dialogs/customer/customer.component';
import { CustomerServiceDialogComponent } from './dialogs/customer-service/customer-service.component';

@Component({
  selector: 'sales-root',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})

export class SalesComponent implements OnInit{
  private saleRequests = [];
  private quotations = [];
  private customers = [];
  private customerServices = [];
  private products = [];

  constructor(private provider: SalesProvider, public dialog: MatDialog){}

  ngOnInit(){
    this.saleRequests = this.provider.getSaleRequests();
    this.quotations = this.provider.getQuotations();
    this.customers = this.provider.getCustomers();
    this.customerServices = this.provider.getCustomerServices();
    this.products = this.provider.getProducts();
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

  saveCustomer(data?){
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
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

  saveCustomerService(data?){
    const dialogRef = this.dialog.open(CustomerServiceDialogComponent, {
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
