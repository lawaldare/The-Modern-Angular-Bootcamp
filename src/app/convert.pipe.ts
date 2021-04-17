import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnit: string): any {
    if (!value) return "";
    if (targetUnit === "km") {
      return value * 1.60934;
    } else if (targetUnit === "m") {
      return value * 1.60934 * 1000;
    } else if (targetUnit === "cm") {
      return value * 1.60934 * 1000 * 100;
    } else {
      throw new Error("Target unit not supported");
    }
  }


}
