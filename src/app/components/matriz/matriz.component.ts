import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css'],
})
export class MatrizComponent {
  jsonMatriz: string = '';
  matrizRotada: number[][] = [];
  errorJsonMatriz: string = "";

  // Función para mostrar la matriz
  botonRotar() {
    try {

      const matriz = JSON.parse(this.jsonMatriz);
      console.log(matriz);

      if (Array.isArray(matriz) && matriz.length > 0 && matriz.every((fila) => Array.isArray(fila) && fila.length == matriz.length)) {
        console.log('Matriz válida');
        this.matrizRotada = matriz;
      } else {
        alert('Matriz inválida, se requiere una matriz NxN');
        this.matrizRotada = [];
      }

    } catch {
      alert('Error: Formato JSON inválido');
      this.errorJsonMatriz = "FORMATOS VÁLIDOS NxN: [[X,X],[X,X]] | [[X,X,X],[X,X,X],[X,X,X]] | ...";
      this.matrizRotada = [];
    }
  }

  private rotarMatriz(matriz: number[][]): number[][] {
    return matriz;
  }
}
