import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import {HttpClientModule, HttpHeaders} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import {FormsModule} from "@angular/forms";
import { StudentDeleteComponent } from './components/student-delete/student-delete.component';
import { PathNotExistsComponent } from './path-not-exists/path-not-exists.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    PathNotExistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
