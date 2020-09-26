import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './services/get-data.service';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { HomelandComponent } from './views/homeland/homeland.component';
import { WorldComponent } from './views/world/world.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { SearchComponent } from './components/search/search.component';
import { CountriesComponent } from './views/countries/countries.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DataCardComponent,
    WorldComponent,
    HomelandComponent,
    TimeAgoPipe,
    SearchComponent,
    CountriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GetDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
