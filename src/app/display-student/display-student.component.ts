import { Students } from '../Interface';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css'],
})
export class DisplayStudentComponent implements OnInit {
  students!: Students[];
  showBalance: boolean = false;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}
