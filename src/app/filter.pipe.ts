import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(collecion: any[], field: string, value: string): any[] {

    if (!collecion) {
      return [];
    }

    if (!field || !value) {
      return collecion;
    }

    return collecion.filter(item => item[field].toLowerCase().includes(value.toLowerCase()));

    // if (isNaN(parseInt(value, 10))) {
      
    // }
    // else {

    // }
  }

}
