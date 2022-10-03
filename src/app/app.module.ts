import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentComponent } from './core/components/main-content/main-content.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainContentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
