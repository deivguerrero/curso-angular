import { Component } from '@angular/core';

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
  typeSearch() {
    return this.items.filter(i => { if (i.type === this.itemp.toLocaleLowerCase()) return true });
  };
  regxTag() {

  };
}
