import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule,
   MdToolbarModule, MdIconModule,
  MdInputModule } from '@angular/material';
  



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    ]
})
export class CustomMaterialModule { }
