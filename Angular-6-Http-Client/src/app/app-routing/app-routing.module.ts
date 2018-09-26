import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CustomerComponent } from '../customer/customer.component';
import { KidComponent } from '../kid/kid.component'
import { KidsDetailsComponent } from '../kids-details/kids-details.component'
//import { AddCustomerComponent } from '../add-customer/add-customer.component';
//import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

const routes: Routes = [
   { 
    path: 'kids', 
    component: KidComponent 
   },
   { 
    path: 'kids/:id', 
    component: KidsDetailsComponent 
  },
   { 
     path: '', 
     redirectTo: 'kids', 
     pathMatch: 'full'
   }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}