import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

// OnInit | DoCheck
export class ProductComponent implements DoCheck, OnInit, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1) constructor');
    }
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log("2) ngOnChanges");
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log("3) ngOnInit");
    }
    ngDoCheck() {
        console.log("4) DoCheck");
    }

    ngOnDestroy() {
        console.log("5) onDestroy");
    }

    addCart() {
        console.log(`añadir al carrito ${this.product.id}`);
        this.productClicked.emit(this.product.id);
    }
}