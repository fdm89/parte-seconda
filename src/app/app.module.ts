import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppContainerComponent } from './app-container/app-container.component';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './layout/navbar/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    NavbarComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    AppContainerComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
