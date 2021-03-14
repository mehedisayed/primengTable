import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDataComponent} from './book-data/book-data.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CardFliperComponent} from './card-fliper/card-fliper.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'Card', component: CardFliperComponent},
  {path: 'Profile', component: ProfileComponent},
  {
    path: 'books',
    component: BookDataComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
