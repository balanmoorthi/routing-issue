import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRootComponent } from './components/admin-root/admin-root.component';
import { ViewArticlesComponent } from './components/view-articles/view-articles.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminLoginComponent,
    AdminRootComponent,
    ViewArticlesComponent,
    ViewUsersComponent,
  ],
  imports: [AdminRoutingModule, FormsModule, CommonModule],
})
export class AdminModule {}
