import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'merge'
})
export class MergePipe implements PipeTransform {
  transform(arr1, arr2) {
    var arr = [];
    arr1.forEach((order, i) => {
      arr.push({ order: order, totalPrice: arr2[i] });
    });
    console.log(arr);
  }
}
