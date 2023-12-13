import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {ListEmpruntComponent} from "./Emprunt/list-emprunt/list-emprunt.component";
import {UpdateEmpruntComponent} from "./Emprunt/update-emprunt/update-emprunt.component";
import {AddEmpruntComponent} from "./Emprunt/add-emprunt/add-emprunt.component";
import {DELETE} from "@angular/cdk/keycodes";
import {DeleteEmpruntComponent} from "./Emprunt/delete-emprunt/delete-emprunt.component";
import { ListAbonnementComponent } from './Abonnement/list-stock/list-stock.component';
import { AddAbonnementComponent } from './Abonnement/add-stock/add-stock.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/Emprunt',
        pathMatch: 'full',
      },
      {path:'Emprunt',component:ListEmpruntComponent},

      {path:'Stock',component:ListAbonnementComponent},

      {path:'Stock/addStock',component:AddAbonnementComponent},


    


      {path:"updateEmp/:id", component:UpdateEmpruntComponent},

      {path:"Emprunt/addEmp", component:AddEmpruntComponent},


      {path:"deleteEmp/:id", component:DeleteEmpruntComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
