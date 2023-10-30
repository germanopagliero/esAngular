import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { RoutingPageNotFoundComponent } from './routing-page-not-found/routing-page-not-found.component';
import { RoutingUserChildComponent } from './routing-user/routing-user-child/routing-user-child.component';
import { RoutingUserComponent } from './routing-user/routing-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: RoutingHomeComponent
  },
  {
    path: 'user/:id', //https://angular.io/start/start-routing
    component: RoutingUserChildComponent,
  },
  {
    path: 'user',
    component: RoutingUserComponent,
  },
  { path: '**', //se non trova nessuna route va a PageNotFound
    component: RoutingPageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
