import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'platzi-store';

  items = ['nicolas', 'luis', 'andres'];

  power = 10;

  ngOnInit(): void {
  }
  
  addItem(){
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

}
