import {Component, OnInit} from '@angular/core';
import {StudentsComponent} from "./components/students/students.component";
import {Student, StudentService} from "./services/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'student-app';
  students: Student[] = [];

  constructor(public studentsService: StudentService) {
  }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(
      response => this.students = response);
  }
}
