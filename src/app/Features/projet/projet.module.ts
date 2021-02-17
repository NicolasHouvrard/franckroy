import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjetContainerComponent } from './projet-container/projet-container.component';
import { ProjetListComponent } from './projet-container/projet-list/projet-list.component';
import { ProjetDetailComponent } from './projet-container/projet-detail/projet-detail.component';
import { ProjetFormComponent } from './projet-container/projet-form/projet-form.component';

import { PROJET_ROUTES } from './projet.routes';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [ProjetContainerComponent,
     ProjetListComponent, 
     ProjetDetailComponent, 
     ProjetFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(PROJET_ROUTES),
    MaterialModule,
  ]
})
export class ProjetModule { }
