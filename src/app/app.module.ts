import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    //Response
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
