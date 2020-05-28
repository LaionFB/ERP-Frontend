import { Component, OnInit } from '@angular/core';
import { DeliveryProvider } from './delivery.provider';
import { MatDialog } from '@angular/material/dialog';
import { DriverDialogComponent } from './dialogs/driver/driver.component';
import { DeliveryDialogComponent } from './dialogs/delivery/delivery.component';
import { ProductDialogComponent } from './dialogs/product/product.component';

@Component({
  selector: 'delivery-root',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})

export class DeliveryComponent implements OnInit {
  public deliveries = [];
  public drivers = [];
  public products = [];

  constructor(private provider: DeliveryProvider, public dialog: MatDialog){}

  ngOnInit(){
    this.deliveries = this.provider.getDeliveries();
    this.drivers = this.provider.getDrivers();
    this.products = this.provider.getProducts();
  }

  saveDelivery(data?){
    const dialogRef = this.dialog.open(DeliveryDialogComponent, {
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

  saveDriver(data?){
    const dialogRef = this.dialog.open(DriverDialogComponent, {
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
