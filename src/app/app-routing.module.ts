import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ImpactComponent } from './impact/impact.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"challenge",component:ChallengeComponent},
  {path:"impact",component:ImpactComponent},
  {path:"contact",component:ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
