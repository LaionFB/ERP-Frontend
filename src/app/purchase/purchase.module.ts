import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { PurchaseProvider } from './purchase.provider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    PurchaseRoutingModule
  ],
  providers: [
    PurchaseProvider
  ]
})
export class PurchaseModule { }
