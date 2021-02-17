import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HOMEPAGE_ROUTES } from './homepage/homepage.routes';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HOMEPAGE_ROUTES)  ]
})
export class HomepageModule {
  
  
 }
