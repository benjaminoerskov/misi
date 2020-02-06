import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorbenComponent } from './torben/torben.component';
import { BenoslavComponent } from './benoslav/benoslav.component';

import { MaterialModule } from './material.module'; // material module imported

@NgModule({
  declarations: [
    AppComponent,
    TorbenComponent,
    BenoslavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }