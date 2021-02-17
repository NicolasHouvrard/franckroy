import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {  APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReqInterceptor } from './shared/Interceptor/http.interceptor';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './shared/modules/material/material.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     NotFoundComponent,
     
 ],
  imports: [ BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
     
     RouterModule.forRoot(APP_ROUTES),
     HttpClientModule,
     
    ],
  providers: [{provide: HTTP_INTERCEPTORS,
                useClass: ReqInterceptor,
              multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
