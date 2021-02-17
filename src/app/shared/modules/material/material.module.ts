import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule} from '@angular/flex-layout';


const MATERIALS = [
  CommonModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  FlexLayoutModule,
]

@NgModule({
  declarations: [],
  imports: MATERIALS,
  exports: MATERIALS,
})
export class MaterialModule { }
