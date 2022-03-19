import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from "./services/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SDA Student Management';

  constructor() {
  }
}
