import { HomelandComponent } from './views/homeland/homeland.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WorldComponent } from './views/world/world.component';

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
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
