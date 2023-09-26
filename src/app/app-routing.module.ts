import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft-details/nft-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nft/details/:id', component: NftDetailsComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
