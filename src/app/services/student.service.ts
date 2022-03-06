import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Student {
  id: number;
  name: string;
  email: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('https://jsonplaceholder.typicode.com/users');
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>('https://jsonplaceholder.typicode.com/posts/${id}');
  }

  postStudent(id: number): Observable<Student> {
    return this.http.get<Student>('https://jsonplaceholder.typicode.com/posts/${id}');
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>('https://jsonplaceholder.typicode.com/posts/${id}');
  }
}
