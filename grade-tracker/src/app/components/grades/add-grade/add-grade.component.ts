import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { discardPeriodicTasks } from '@angular/core/testing';
import { Grade } from 'src/app/Grades';
import { GradeService } from 'src/app/services/grade.service';
//import { GRADES } from 'src/app/mock-grades';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {

  mark: number;
  class: string = "";
  teacher: string = "";
  grades: Grade[] = []

  updateMark: any;
  updateClass: any;
  updateTeacher: any;
  updateID: any;

  constructor(private gradeService: GradeService) { }

  @Output() updateEvent:EventEmitter<Grade> = new EventEmitter<Grade>();
  @Input() ToUpdate = this.grades

  ngOnInit(): void {
    this.gradeService.getGrades().subscribe(
      (grades) => (this.grades = grades)
    )
  }

  onDelete(grade: Grade) {
    this.gradeService.deleteGrade(grade).subscribe(
      () => (this.grades = this.grades.filter(t => t.id != grade.id))
    )
  }

  onSubmit(){

    const newGrade = {

      mark: this.mark,
      class: this.class,
      teacher: this.teacher,
    }

    this.gradeService.addGrade(newGrade).subscribe(
      (grades) => (this.grades.push(newGrade))
    )

    this.mark = 0;
    this.class = ""
    this.teacher = ""

  }

  onEdit(grade: Grade) {

    console.log("edit")
    console.log(grade)

    this.updateID = grade.id
    this.updateMark = grade.mark
    this.updateClass = grade.class
    this.updateTeacher = grade.teacher
    
  }

  upDate(grades) {

    for (let i = 0; i < grades.length; i++) {
      if (this.grades[i].id === this.updateID){

        this.grades[i].mark = this.updateMark
        this.grades[i].class = this.updateClass
        this.grades[i].teacher = this.updateTeacher

      }
    }
    
    console.log(grades)

  }

}
