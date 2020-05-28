import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';
import { DeliveryProvider } from './delivery.provider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    DeliveryRoutingModule
  ],
  providers: [
    DeliveryProvider
  ]
})
export class DeliveryModule { }
