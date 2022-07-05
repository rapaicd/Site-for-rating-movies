import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'login', component:LoginPageComponent},
  {path:'home',component:HomeComponent},
  {path:'movies/:type/:id',component:MoviesComponent},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
