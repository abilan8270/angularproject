import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromcomponentComponent } from './fromcomponent/fromcomponent.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule,Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes:Routes = [
  {path:'',component:LoginPageComponent},
  {path:'form',component:FromcomponentComponent},
  {path:'home',component:HomePageComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    FromcomponentComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
