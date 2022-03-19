import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Student {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  getStudents(): Observable<Student[]> {
    // return this.http.get<Student[]>('https://jsonplaceholder.typicode.com/users');
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(id: number): Observable<Student> {
    // return this.http.get<Student>('https://jsonplaceholder.typicode.com/posts/${id}');
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions);
  }


  // @ts-ignore
  updateStudent(student: Student | undefined): Observable<Student> {
    // @ts-ignore
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.put<Student>(url, student, this.httpOptions);
  }

  deleteStudent(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.delete<Student>(url, this.httpOptions);
  }
}
