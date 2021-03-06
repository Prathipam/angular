import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
  redirectTo:'/home',
    pathMatch:'full',
  },
  {
    path:'home',
    pathMatch:'full',
    component:HomeComponent
  },
  {
  path:'products',
  loadChildren:'./products/products.module#ProductsModule'

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
