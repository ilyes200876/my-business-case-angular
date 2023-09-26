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
import { MediaComponent } from './media/media.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft-details/nft-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NftComponent,
    AddressComponent,
    UserComponent,
    EthComponent,
    CategoryComponent,
    SubCategoryComponent,
    MediaComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    HomeComponent,
    NftDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }