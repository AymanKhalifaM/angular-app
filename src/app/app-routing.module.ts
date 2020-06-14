import {  Routes, RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';

import { ExploreComponent } from './explore/explore.component';

import { CreateComponent } from './create/create.component';

const appRouts : Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'explore',component:ExploreComponent},
    {path:'create',component:CreateComponent}
  ];

  @NgModule({
    imports:[
        RouterModule.forRoot(appRouts)
    ],
    exports:[RouterModule]
  })
   export class AppRouting {}