import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemp = '*';
  items = [
    { "id": "", "label": "Perro 🐶", "type": "animal" },
    { "id": "", "label": "Gato 🐱", "type": "animal" },
    { "id": "", "label": "Raton 🐭", "type": "animal" },
    { "id": "", "label": "Zorro 🦊", "type": "animal" },
    { "id": "", "label": "Conejo 🐰", "type": "animal" },
    { "id": "", "label": "Leon 🦁", "type": "animal" },
    { "id": "", "label": "Mono 🐵", "type": "animal" },
    { "id": "", "label": "Delfin 🐬", "type": "animal" },
    { "id": "", "label": "Dinosaurio 🦖", "type": "animal" },
    { "id": "", "label": "Gorila 🦍", "type": "animal" },
    { "id": "", "label": "Manzana 🍎", "type": "fruta" },
    { "id": "", "label": "Pera 🍐", "type": "fruta" },
    { "id": "", "label": "Sandia 🍉", "type": "fruta" },
    { "id": "", "label": "Piña 🍍", "type": "fruta" },
    { "id": "", "label": "Brocoli 🥦", "type": "fruta" }];
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  typeSearch() {
    return this.items.filter(i => { if (i.type === this.itemp.toLocaleLowerCase()) return true });
  };
  regxTag() {

  };
  clickProduct(id: number) {
    alert(`Vale con ${id}`);
  };
}
