import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryProvider } from './inventory.provider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    InventoryRoutingModule
  ],
  providers: [
    InventoryProvider
  ]
})
export class InventoryModule { }
