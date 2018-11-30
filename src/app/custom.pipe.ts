import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //replace the email id with the arg you provide
    let newvalue = value;
    newvalue = newvalue.substring(0, newvalue.indexOf('@')+1)+args;
    return newvalue;
  }

}
