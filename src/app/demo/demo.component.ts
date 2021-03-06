import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  itemp = '*';
  power = 1;
  items = [
    { "id": "", "label": "Perro ð¶", "type": "animal" },
    { "id": "", "label": "Gato ð±", "type": "animal" },
    { "id": "", "label": "Raton ð­", "type": "animal" },
    { "id": "", "label": "Zorro ð¦", "type": "animal" },
    { "id": "", "label": "Conejo ð°", "type": "animal" },
    { "id": "", "label": "Leon ð¦", "type": "animal" },
    { "id": "", "label": "Mono ðµ", "type": "animal" },
    { "id": "", "label": "Delfin ð¬", "type": "animal" },
    { "id": "", "label": "Dinosaurio ð¦", "type": "animal" },
    { "id": "", "label": "Gorila ð¦", "type": "animal" },
    { "id": "", "label": "Manzana ð", "type": "fruta" },
    { "id": "", "label": "Pera ð", "type": "fruta" },
    { "id": "", "label": "Sandia ð", "type": "fruta" },
    { "id": "", "label": "PiÃ±a ð", "type": "fruta" },
    { "id": "", "label": "Brocoli ð¥¦", "type": "fruta" }];

  constructor() { }

  ngOnInit(): void {
  }

  typeSearch() {
    return this.items.filter(i => { if (i.type === this.itemp.toLocaleLowerCase()) return true });
  };
  regxTag() {

  };

}
