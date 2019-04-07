import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

//obtenemos datos del padre
@Input() contador: number;

//pasar datos al padre 
@Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }


multiplicar(){
  this.contador *=2;
  this.cambioContador.emit(this.contador);

}


dividir(){
  this.contador /=2;
this.cambioContador.emit(this.contador);

}
resetNieto( nuevoContador)
{
this.contador = nuevoContador;
this.cambioContador.emit(this.contador);

}

}
