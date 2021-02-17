import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserContainerComponent } from './user-container/user-container.component';
import { UserListComponent } from './user-container/user-list/user-list/user-list.component';
import { UserDetailComponent } from './user-container/user-detail/user-detail/user-detail.component';
import { UserFormComponent } from './user-container/user-form/user-form.component';
import { UTILISATEUR_ROUTES } from './utilisateur.routes';




@NgModule({
  declarations: [
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
  

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild(UTILISATEUR_ROUTES),
  ]
})
export class UtilisateurModule { }
