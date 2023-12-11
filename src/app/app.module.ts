import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NftComponent } from './nft/nft.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { EthComponent } from './eth/eth.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft-details/nft-details.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorProvider } from './token.interceptor';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DatePipe } from '@angular/common';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminAddressComponent } from './admin-address/admin-address.component';
import { AdminNftComponent } from './admin-nft/admin-nft.component';
import { AdminSubCategoryComponent } from './admin-sub-category/admin-sub-category.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { SubCategoryEditComponent } from './sub-category-edit/sub-category-edit.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { NftUserComponent } from './nft-user/nft-user.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NftComponent,
    AddressComponent,
    UserComponent,
    EthComponent,
    CategoryComponent,
    SubCategoryComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    HomeComponent,
    NftDetailsComponent,
    ProfileComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    AdminUserComponent,
    AdminAddressComponent,
    AdminNftComponent,
    AdminSubCategoryComponent,
    AdminCategoryComponent,
    AdminHeaderComponent,
    AddSubCategoryComponent,
    SubCategoryEditComponent,
    CategoryEditComponent,
    AddressUpdateComponent,
    ProfileDataComponent,
    NftUserComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
