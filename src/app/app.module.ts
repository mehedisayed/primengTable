import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BookDataComponent} from './book-data/book-data.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TabViewModule} from 'primeng/tabview';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardFliperComponent } from './card-fliper/card-fliper.component';
import { ProfileComponent } from './profile/profile.component';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import { TabsComponent } from './tabs/tabs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    NotFoundComponent,
    CardFliperComponent,
    ProfileComponent,
    TabsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    TabViewModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    DividerModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
