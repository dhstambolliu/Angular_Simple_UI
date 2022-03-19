import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from "../../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.studentService.updateStudent(this.student).subscribe(() => this.goBack());
  }

  getStudent(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe(student => this.student = student);
  }
}
