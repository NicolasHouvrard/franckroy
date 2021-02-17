import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedDirective } from '../../directives/selected.directive';
import { FilterPipe } from '../../pipes/filter.pipe';

import { ProjetPipe } from '../../pipes/projet.pipe';



@NgModule({
  declarations: [
    SelectedDirective,
    FilterPipe ,
    ProjetPipe ],
  imports: [CommonModule
    
  ],
  exports: [SelectedDirective,
    FilterPipe ,
    CommonModule,
    ProjetPipe,

  ]
})

export class SharedModule { }
