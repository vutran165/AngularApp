
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
// add bootstrap 4
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import {  NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserModule,
    // BrowserAnimationsModule,
    // NoopAnimationsModule
  ],
  // exports: [BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

