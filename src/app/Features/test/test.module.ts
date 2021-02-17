import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AffichageComponent } from './affichage/affichage.component';

import { TEST_ROUTES } from './test.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProjetComponent } from './affichage/projet/projet.component';




@NgModule({
  declarations: [AffichageComponent, ProjetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TEST_ROUTES),
    MaterialModule,
  ]
})
export class TestModule { }
