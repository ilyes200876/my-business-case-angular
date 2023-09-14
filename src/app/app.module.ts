import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NftComponent } from './nft/nft.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { EthComponent } from './eth/eth.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    NftComponent,
    AddressComponent,
    UserComponent,
    EthComponent,
    CategoryComponent,
    SubCategoryComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
