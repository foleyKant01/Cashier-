import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from '../app/auth/auth.component';
import { UserComponent } from './user/user.component';
import { SellingPageComponent } from './user/selling-page/selling-page.component';
import { AppComponent } from './app.component';

// import { ProductManagementComponent } from './product-management/product-management.component';

export const routes: Routes = [
  { path:'', component: AppComponent,
    children: [
      {path: '', redirectTo: 'auth', pathMatch: 'full' },
      {path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule)},
      {path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)},
      {path: 'category', loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule)},
      {path: 'product', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)},
      // { path: '**', component: NotfoundComponent }
      ]
  }
];
