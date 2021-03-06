import { OrdersPageComponent } from './orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AddPageComponent,
    EditPageComponent,
    OrdersPageComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent },
          { path: 'add', component: AddPageComponent },
          { path: 'product/:id/edit', component: EditPageComponent },
          { path: 'orders', component: OrdersPageComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
