import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completeWithZeros'
})
export class CompleteWithZerosPipe implements PipeTransform {

  transform(value: number, qtd: number): string {

    let result = ('0'.repeat(qtd) + value.toString()).slice(-qtd);

    return result;
  }

}
