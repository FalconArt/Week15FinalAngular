import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslateApiComponent } from './translate-api/translate-api.component';
import { PhotoApiComponent } from './photo-api/photo-api.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslateApiComponent,
    PhotoApiComponent
  ],
  imports: [
    BrowserModule,
    //Http,
    HttpModule,
    //Response
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
