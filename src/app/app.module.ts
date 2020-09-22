import { GetDataService } from './services/get-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { WorldComponent } from './views/world/world.component';
import { HttpClientModule } from '@angular/common/http';
import { HomelandComponent } from './views/homeland/homeland.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DataCardComponent,
    WorldComponent,
    HomelandComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GetDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
