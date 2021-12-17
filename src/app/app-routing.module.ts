import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDetailsComponent } from './editDetails/edit-details/edit-details.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'edit',canActivate:[AuthGuardGuard], component:EditDetailsComponent,
  data: { roles: ['hr'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
