import { Students } from './Interface/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter',
})
export class StudentFilterPipe implements PipeTransform {
  transform(students: Students[], showBalance: boolean): any[] {
    if (showBalance) {
      return students.filter((student) => student.feesBalance !== 0);
    } else {
      return students;
    }
  }
}
