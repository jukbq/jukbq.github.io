import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hw1Component } from './hw1/hw1.component';







@NgModule({
  declarations: [
    AppComponent,
    Hw1Component,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream:modul-6-js-advanced-updated/m6-hw1/src/app/app.module.ts
    FormsModule
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> Stashed changes:modul-6-js-advanced-updated/m6hw1/src/app/app.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
