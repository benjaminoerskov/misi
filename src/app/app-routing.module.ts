import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TorbenComponent } from './torben/torben.component';
import { BenoslavComponent } from './benoslav/benoslav.component';


const routes: Routes = [
  { path: '', redirectTo: '/benoslav', pathMatch: 'full' },
  {path: 'torben', component: TorbenComponent},
  {path: 'benoslav', component: BenoslavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
