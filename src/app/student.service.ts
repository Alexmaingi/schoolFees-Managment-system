import { Injectable } from '@angular/core';
import { Students } from './Interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  students: Students[] = [
    {
      id: 1,
      name: 'John',
      feesBalance: 3000,
    },
    {
      id: 2,
      name: 'Mark',
      feesBalance: 0,
    },
    {
      id: 3,
      name: 'MARY',
      feesBalance: 5050,
    },
    {
      id: 4,
      name: 'Kelvin',
      feesBalance: 900,
    },
    {
      id: 5,
      name: 'carlos',
      feesBalance: 0,
    },
    {
      id: 6,
      name: 'Doe',
      feesBalance: 1000,
    },
    {
      id: 7,
      name: 'Mark',
      feesBalance: 0,
    },
  ];

  getStudents(): Students[] {
    return this.students;
  }

  addStudents(newStudent: Students) {
    this.students.push(newStudent);
  }
}
