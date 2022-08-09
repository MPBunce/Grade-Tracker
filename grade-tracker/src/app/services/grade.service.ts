import { Injectable, Output } from '@angular/core';
import { GRADES } from 'src/app/mock-grades';
import { Grade } from 'src/app/Grades';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GradeService {
 

  private apiURL = 'http://localhost:5000/grades'

  constructor(private http:HttpClient) { }

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiURL)
  }

  deleteGrade(grade: Grade): Observable<Grade[]> {
    const url = `${this.apiURL}/${grade.id}`
    return this.http.delete<Grade[]>(url)
  }

  addGrade(grade: Grade): Observable<Grade[]> {
    return this.http.post<Grade[]>(this.apiURL, grade)
  }

}
