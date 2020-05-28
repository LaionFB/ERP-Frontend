import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'delivery', loadChildren: 'src/app/delivery/delivery.module#DeliveryModule' },
  { path: 'inventory', loadChildren: 'src/app/inventory/inventory.module#InventoryModule' },
  { path: 'purchase', loadChildren: 'src/app/purchase/purchase.module#PurchaseModule' },
  { path: 'sales', loadChildren: 'src/app/sales/sales.module#SalesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
