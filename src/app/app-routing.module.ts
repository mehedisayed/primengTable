import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDataComponent} from './book-data/book-data.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CardFliperComponent} from './card-fliper/card-fliper.component';
import {ProfileComponent} from './profile/profile.component';
import {TabsComponent} from './tabs/tabs.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'card', component: CardFliperComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'books',
    component: BookDataComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
