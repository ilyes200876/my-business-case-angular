import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft-details/nft-details.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AdminNftComponent } from './admin-nft/admin-nft.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminAddressComponent } from './admin-address/admin-address.component';
import { AdminSubCategoryComponent } from './admin-sub-category/admin-sub-category.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { SubCategoryEditComponent } from './sub-category-edit/sub-category-edit.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
import { NftUpdateComponent } from './nft-update/nft-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nft/details/:id', component: NftDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[authGuard]},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-nft', component: AdminNftComponent},
  {path: 'admin-user', component: AdminUserComponent},
  {path: 'admin-address', component: AdminAddressComponent},
  {path: 'admin-sub-category', component: AdminSubCategoryComponent},
  {path: 'admin-category', component: AdminCategoryComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin-sub-category/:id/update', component: SubCategoryEditComponent},
  {path: 'admin-category/:id/update', component: CategoryEditComponent},
  {path: 'address/:id/update', component: AddressUpdateComponent},
  {path: 'nft-update/:id/update', component: NftUpdateComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
