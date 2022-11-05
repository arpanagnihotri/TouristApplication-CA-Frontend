import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTouristComponent } from './add-tourist/add-tourist.component';
import { HomeComponent } from './home/home.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';

const routes: Routes = [
  {path:"tourists",component:TouristListComponent},
  {path:"add-tourist",component:AddTouristComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
