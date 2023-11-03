import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NftDetailsComponent } from './nft-details/nft-details.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nft/details/:id', component: NftDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile/:id', component: ProfileComponent, canActivate:[authGuard]},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
