import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { KidComponent } from './kid/kid.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { KidsDetailsComponent } from './kids-details/kids-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    KidsDetailsComponent,
    KidComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
