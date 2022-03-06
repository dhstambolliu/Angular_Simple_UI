import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Student {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private status: any;

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('https://jsonplaceholder.typicode.com/users');
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>('https://jsonplaceholder.typicode.com/posts/${id}');
  }

  // postStudent(id: number): Observable<Student> {
  //   return this.http.post<Student>('https://jsonplaceholder.typicode.com/posts/');
  // }

  // @ts-ignore
  deleteStudent(id: number): Observable<Student> {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    this.http.delete<Student>('https://jsonplaceholder.typicode.com/posts/${id}', { headers })
      .subscribe(() => this.status = 'Delete successful');
  }
}
