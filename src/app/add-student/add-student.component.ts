import { StudentService } from './../student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(private studentService: StudentService) {}

  addStudent(name: string, feesBalance: string) {
    this.studentService.addStudents({
      id: Math.floor(Math.random() * 100),
      name,
      feesBalance: +feesBalance,
    });
  }
}
