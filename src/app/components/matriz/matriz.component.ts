import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css'],
})
export class MatrizComponent {
  jsonMatriz: string = '';
  matrizRotada: number[][] = [];

  // Función para mostrar la matriz
  rotarMatriz() {
    try {

      const matriz = JSON.parse(this.jsonMatriz);
      console.log(matriz);

      if (Array.isArray(matriz) && matriz.length == 2 && matriz.every((fila) => Array.isArray(fila) && fila.length == 2)) {
        console.log('Matriz válida');
        this.matrizRotada = matriz;
      } else {
        alert('Matriz inválida, se requiere una matriz 2x2');
        this.matrizRotada = [];
      }

    } catch {
      console.log('Error: Formato JSON inválido');
      alert('Error: Formato JSON inválido, FORMATO VÁLIDO: [[X,X],[X,X]]');
      this.matrizRotada = [];
    }
  }
}
