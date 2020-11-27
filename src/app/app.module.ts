import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicModule } from './@public/pages/public.module';
import { AdminModule } from './@admin/pages/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PublicModule, AdminModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
