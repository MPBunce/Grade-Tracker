import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/Grades';
import { GradeService } from 'src/app/services/grade.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})

export class GradesComponent implements OnInit {

  grades: Grade[] = []

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.getGrades().subscribe(
      (grades) => (this.grades = grades)
    )
  }
 
  productList: Grade[] = [];

  highToLow(grades){


  }

  lowToHigh(grades){



  }

}
