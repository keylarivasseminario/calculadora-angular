import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA : number;
  operandoB : number;
  


@Output() resultadoSuma = new EventEmitter< number | string>();


  sumar():void{
   let resultado = this.operandoA + this.operandoB;
   this.resultadoSuma.emit('El Resultado de la Suma Es : ' + resultado); 

  }

  restar():void{
    let resultado = this.operandoA - this.operandoB;
   this.resultadoSuma.emit('El Resultado de la Resta Es : ' +resultado);
 
   }

   multiplicar():void{
    let resultado = this.operandoA * this.operandoB;
    this.resultadoSuma.emit('El Resultado de la Multiplicacion Es : ' +resultado);
 
   }

   dividir():void{
    let resultado = this.operandoA / this.operandoB;
    this.resultadoSuma.emit('El Resultado de la Division Es : ' +resultado);
 
   }

   limpiarCampos() {
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultadoSuma.emit('');
    
  }

 



}
