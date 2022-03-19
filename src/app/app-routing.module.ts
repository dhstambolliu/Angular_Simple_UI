import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from "./components/students/students.component";
import {StudentEditComponent} from "./components/student-edit/student-edit.component";
import {StudentDeleteComponent} from "./components/student-delete/student-delete.component";
import {PathNotExistsComponent} from "./path-not-exists/path-not-exists.component";

const routes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent},
  {path: 'edit/:id', component: StudentEditComponent},
  {path: 'delete/:id', component: StudentDeleteComponent},
  {path: '404', component: PathNotExistsComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
