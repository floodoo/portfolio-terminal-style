import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalNavbarComponent } from './terminal-navbar/terminal-navbar.component';
import { TerminalHomeComponent } from './terminal-home/terminal-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalNavbarComponent,
    TerminalHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
