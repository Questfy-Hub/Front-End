import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'store-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css',
})
export class StoreItemComponent {
  @Input() isSpecial!: boolean;
  ngOnInit() {
    
    if(this.isSpecial){
      document.querySelector(".item__container")?.setAttribute("style","background-color: #FFC700")
    }
  }
}
