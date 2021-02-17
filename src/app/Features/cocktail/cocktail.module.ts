import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

import { COCKTAIL_ROUTES} from './cocktail.routes'
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
    
  ],
  imports: [
    SharedModule,
    
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild(COCKTAIL_ROUTES),
    MaterialModule,
  ]
})
export class CocktailModule { }
