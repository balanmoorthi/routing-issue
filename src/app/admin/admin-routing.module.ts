import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRootComponent } from './components/admin-root/admin-root.component';
import { ViewArticlesComponent } from './components/view-articles/view-articles.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { AuthGuard } from './guards/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminRootComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'view',
        component: ViewArticlesComponent,
      },
      {
        path: 'user',
        component: ViewUsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
