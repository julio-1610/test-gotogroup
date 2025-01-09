import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css'],
  standalone: false,
})
export class MatrizComponent {
  jsonMatriz: string = '';
  matrizRotada: string = '';

  rotarMatriz() {
    if (this.jsonMatriz) {
      this.matrizRotada = this.jsonMatriz;
    }
  }
}
