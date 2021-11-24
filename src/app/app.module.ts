import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { loginComponent } from './components/pages/login/login.component';
import { AdminForumComponent } from './components/pages/admin-forum/admin-forum.component';
import { StudentForumComponent } from './components/pages/student-forum/student-forum.component';
import { FormsModule } from '@angular/forms';
import { AdminMenuComponent } from './components/pages/admin-menu/admin-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    loginComponent,
    AdminForumComponent,
    StudentForumComponent,
    AdminMenuComponent,
  
    

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule,  MatSliderModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
