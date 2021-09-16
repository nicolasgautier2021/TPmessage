import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeteComponent } from './tete/tete.component';
import { GaucheComponent } from './gauche/gauche.component';
import { BasComponent } from './bas/bas.component';
import { HautComponent } from './haut/haut.component';

@NgModule({
  declarations: [
    AppComponent,
    TeteComponent,
    GaucheComponent,
    BasComponent,
    HautComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
