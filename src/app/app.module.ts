import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './student-login/student-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
