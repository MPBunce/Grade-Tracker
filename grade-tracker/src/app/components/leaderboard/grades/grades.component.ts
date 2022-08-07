import { Component, OnInit } from '@angular/core';
import { GRADES } from 'src/app/mock-grades';
import { Grade } from 'src/app/Grades';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades: Grade[] = GRADES

  constructor() { }

  ngOnInit(): void {
  }

}
