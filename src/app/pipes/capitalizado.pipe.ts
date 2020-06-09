import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLocaleLowerCase();
    const primeraLetra = value.split('')[0];
    const cadenaFinal = primeraLetra.toUpperCase() + value.substr(1);
    return cadenaFinal;
  }

}
