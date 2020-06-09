import { Component } from '@angular/core';
import { createNgModule } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  var1 = 'Ricardo';
  var2 = 'BootCamp';
  var3 = 'Capitan America';
  pi = Math.PI;
  porcentaje = 0.454654634634634;
  salario = 1200;
  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Se ejecuto la promesa');
      resolve('Promesa');
    }, 3000);
  });
  fecha = new Date(2020,0,3);
  personaje = {
    nombre: 'Jonas',
    epoca: 2010,
    estaVivo: true,
    serie: 'Dark'
  };
  nombreSerie = 'dArK';
  telefono = '987654321'; // 987****** // ocultar
}
