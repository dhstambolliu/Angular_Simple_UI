import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from "../../services/student.service";
import {Observable} from "rxjs";

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

  delete(student: Student) {
    // @ts-ignore
    this.studentsService.deleteStudent(this.students).subscribe(() => this.students())
  }


  add(name: string, email: string): void {
    // Removal of whitespace from the data
    name = name.trim();
    email = email.trim();

    // stop execution when fields are empty
    if (!name || !email) {
      return;
    }

    // Stop execution when e-mail address does not contain "@"
    if (email.indexOf('@') < 1) {
      return;
    }

    // Upload data to server and update local table
    this.studentsService.addStudent({name, email} as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }
}
