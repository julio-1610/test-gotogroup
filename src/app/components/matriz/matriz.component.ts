import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css'],
})

// Componente para rotar una matriz NxN
export class MatrizComponent {
  jsonMatriz: string = '';
  matrizRotada: number[][] = [];
  errorJsonMatriz: boolean = false;

  // Función para mostrar la matriz rotada
  botonRotar() {
    try {

      const matriz = JSON.parse(this.jsonMatriz);
      console.log(matriz);

      if (Array.isArray(matriz) && matriz.length > 0 && matriz.every((fila) => Array.isArray(fila) && fila.length == matriz.length)) {
        this.errorJsonMatriz = false;
        console.log('Matriz válida');
        this.matrizRotada = this.rotarMatriz(matriz);
      } else {
        alert('Matriz inválida, se requiere una matriz NxN');
        this.errorJsonMatriz = true;
        this.matrizRotada = [];
      }

    } catch {
      alert('Error: Formato JSON inválido');
      this.errorJsonMatriz = true;
      this.matrizRotada = [];
    }
  }

  // Función para rotar la matriz
  private rotarMatriz(matriz: number[][]): number[][] {
    const N = matriz.length;
    const matrizRotada = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        matrizRotada[N - j - 1][i] = matriz[i][j];
      }
    }
    return matrizRotada;
  }
}
