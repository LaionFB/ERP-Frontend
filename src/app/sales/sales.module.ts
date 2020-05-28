import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SalesProvider } from './sales.provider';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    SalesRoutingModule
  ],
  providers: [
    SalesProvider
  ]
})
export class SalesModule { }
