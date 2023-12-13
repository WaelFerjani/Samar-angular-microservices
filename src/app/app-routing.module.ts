import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {ListEmpruntComponent} from "./Emprunt/list-emprunt/list-emprunt.component";
import {UpdateEmpruntComponent} from "./Emprunt/update-emprunt/update-emprunt.component";
import {AddEmpruntComponent} from "./Emprunt/add-emprunt/add-emprunt.component";
import {DELETE} from "@angular/cdk/keycodes";
import {DeleteEmpruntComponent} from "./Emprunt/delete-emprunt/delete-emprunt.component";
import { AddAbonnementComponent } from './Abonnement/add-abonnement/add-abonnement.component';
import { ListAbonnementComponent } from './Abonnement/list-abonnement/list-abonnement.component';
import { UpdateAbonnementComponent } from './Abonnement/update-abonnement/update-abonnement.component';

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
      {path:'Abonnement',component:ListAbonnementComponent},

      {path:"updateEmp/:id", component:UpdateEmpruntComponent},
      {path:"updateAbon/:id", component:UpdateAbonnementComponent},

      {path:"Emprunt/addEmp", component:AddEmpruntComponent},

      {path:"Abonnement/addAbon", component:AddAbonnementComponent},

      {path:"deleteEmp/:id", component:DeleteEmpruntComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
