import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from "./components/students/students.component";
import {StudentEditComponent} from "./components/student-edit/student-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent},
  {path: 'edit/:id', component: StudentEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
