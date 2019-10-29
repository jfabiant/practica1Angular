import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1Angular';
  art = {
    codigo: null,
    descripcion: null,
    precio: null
  }
  articulos = [
    { codigo: 1, descripcion: 'Coca Cola', precio: '1.50' },
    { codigo: 2, descripcion: 'Doritos', precio: '1.00' },
    { codigo: 3, descripcion: 'Head Shoulder Azul', precio: '1.20' },
    { codigo: 4, descripcion: 'Aceite cocinero', precio: '1.70' },
    { codigo: 5, descripcion: 'Agual Cielo', precio: '0.50' }
  ]

  willEdit = false;

  hayRegistros() {
    return this.articulos.length > 0;
  }

  agregar() {

    for (let a of this.articulos) {
      if (a.codigo == this.art.codigo) {
        alert(`El articulo ${this.art.codigo} ya existe.`);
        return;
      }
      this.articulos.push({ codigo: this.art.codigo, descripcion: this.art.descripcion, precio: this.art.precio });
      alert('Articulo agregado satisfactoriamente.');
      this.limpiar();
      return;
    }

  }

  eliminar(art) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (art.codigo == this.articulos[i].codigo) {
        this.articulos.splice(i, 1);
        return;
      }
    }
  }

  seleccionar(art) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;

    this.willEdit = true;

  }

  modificar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        this.articulos[i].descripcion = this.art.descripcion;
        this.articulos[i].precio = this.art.precio;
        this.limpiar();
        return;
      }
    }
  }

  limpiar() {
    this.art.codigo = null;
    this.art.descripcion = null;
    this.art.precio = null;

    this.willEdit = false;

  }
}
