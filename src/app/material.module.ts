import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

    import {
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatListModule,
      MatSidenavModule
      } from '@angular/material';

    @NgModule({
      imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule
      ],
      exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule
      ]
    })
    export class MaterialModule {}