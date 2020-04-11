import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';

const routes: Routes = [
  {path: '', component: AppComponent, children: [
    {path:'', loadChildren: './home-page/home-page.module#HomePageModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
