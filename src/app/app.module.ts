import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmdkModule } from '@ngneat/cmdk';
import { CmdkComponent } from './cmdk/cmdk.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    CmdkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CmdkModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  pages: Array<string> = [];
search = '';



}
