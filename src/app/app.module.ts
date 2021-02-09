import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Design/material/material.module';
import { HomeComponent } from './Pages/home/home.component';
import { CompleteWithZerosPipe } from './Pipes/complete-with-zeros.pipe';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DatefilterComponent } from './Pages/datefilter/datefilter.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompleteWithZerosPipe,
    DatefilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
