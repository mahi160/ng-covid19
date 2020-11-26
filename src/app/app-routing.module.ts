import { HomelandComponent } from './views/homeland/homeland.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WorldComponent } from './views/world/world.component';
import { CountriesComponent } from './views/countries/countries.component';

const routes: Routes = [
  {
    path: 'world',
    component: WorldComponent,
  },
  {
    path: 'homeland',
    component: HomelandComponent,
  },
  {
    path: ' ',
    redirectTo: '/homeland',
  },
  {
    path: 'countries',
    component: CountriesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 'FilterPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
