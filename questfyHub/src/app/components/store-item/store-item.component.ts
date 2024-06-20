import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { GiftsService } from '../../services/gifts.service';
@Component({
  selector: 'store-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css',
})
export class StoreItemComponent {
  @Input() isSpecial!: boolean;
  @Input() info: any;
  img:any;

  constructor(private giftService: GiftsService){
    
  }
  async ngOnInit() {
    this.img = `http://localhost:8080/gifts/image/${this.info.giftCode}`
    if(this.isSpecial){
      document.querySelector(".item__container")?.setAttribute("style","background-color: #FFC700")
    }
  }
}
