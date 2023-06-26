import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { KidsComponent } from './components/kids/kids.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
