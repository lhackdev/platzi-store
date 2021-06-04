import {
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    SimpleChange
} from '@angular/core'
import { Product } from '../../models/product.model';




@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() product!: Product;
    @Output() producCliked: EventEmitter<any> = new EventEmitter();

    today =  new Date()

    constructor () {
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChange) {
    //     console.log('2. ngOnChanges')
    //     console.log(changes);
    // }

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }
    
    addCart(){
        console.log("añadir al carrito")
        this.producCliked.emit(this.product.id);
    }
}