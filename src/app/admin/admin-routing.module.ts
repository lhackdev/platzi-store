import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { NavComponent } from './components/nav/nav.component';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavComponent,
    children : [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
