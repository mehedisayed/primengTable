import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDataComponent} from './book-data/book-data.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CardFliperComponent} from './card-fliper/card-fliper.component';

const routes: Routes = [
  {path: 'books', component: BookDataComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'Card', component: CardFliperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
