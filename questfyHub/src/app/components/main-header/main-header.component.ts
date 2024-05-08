import { Component } from '@angular/core';
import { UserPopUpComponent } from '../user-pop-up/user-pop-up.component';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [UserPopUpComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent {
  isPopUpOpen: boolean = false;
  open() {
    let popup = document.getElementById('user-popup');
    if (!this.isPopUpOpen) {
      console.log(this.isPopUpOpen);
      popup!.style.display = 'flex';

      console.log(this.isPopUpOpen);
    } else {
      popup!.style.display = 'none';
    }

    this.isPopUpOpen = !this.isPopUpOpen;
  }
}
