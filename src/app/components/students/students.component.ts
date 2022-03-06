import { Component, OnInit } from '@angular/core';
import {Student, StudentService} from "../../services/student.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  title = 'student-app';
  students: Student[] = [];
  status: string = "";
  show: boolean = false;

  constructor(public studentsService: StudentService) {
  }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(
      response => this.students = response);
  }

  onClick() {
    this.show = true;
  }
}
