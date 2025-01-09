import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { MatrizComponent } from './matriz.component';

describe('MatrizComponent', () => {
  let component: MatrizComponent;
  let fixture: ComponentFixture<MatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrizComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe rotar una matriz 2x2 en sentido antihorario', () => {
    component.jsonMatriz = '[[1, 2], [3, 4]]';
    component.botonRotar();

    expect(component.matrizRotada).toEqual([
      [2, 4],
      [1, 3],
    ]);
  });

  it('Debe rotar una matriz 3x3 en sentido antihorario', () => {
    component.jsonMatriz = '[[1, 2, 3], [4, 5, 6], [7, 8, 9]]';
    component.botonRotar();

    expect(component.matrizRotada).toEqual([
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]);
  });

  it('Debe mostrar un error con una matriz no cuadrada', () => {
    component.jsonMatriz = '[[1, 2, 3], [4, 5, 6]]';
    component.botonRotar();

    expect(component.errorJsonMatriz).toBeTrue();
    expect(component.matrizRotada).toEqual([]);
  });

  it('Debe mostrar un error si el JSON es inválido', () => {
    component.jsonMatriz = '[1, 2, 3';
    component.botonRotar();

    expect(component.errorJsonMatriz).toBeTrue();
    expect(component.matrizRotada).toEqual([]);
  });

  it('Debe manejar una matriz vacía', () => {
    component.jsonMatriz = '[]';
    component.botonRotar();

    expect(component.errorJsonMatriz).toBeTrue();
    expect(component.matrizRotada).toEqual([]);
  });

  it('Debe manejar una matriz 1x1 correctamente', () => {
    component.jsonMatriz = '[[5]]';
    component.botonRotar();

    expect(component.matrizRotada).toEqual([[5]]);
  });
});
