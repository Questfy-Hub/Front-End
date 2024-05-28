import { Component } from '@angular/core';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { StoreSpecialComponent } from '../../components/store-special/store-special.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [StoreItemComponent,StoreSpecialComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  isAdm: boolean = false;
  constructor(private userService: UserService){

  }
  ngOnInit(){
    this.checkAdm();
  }
  checkAdm() {
    try {
      console.log(
        this.userService.getUserByUsername(localStorage.getItem('logged'))
      );
      this.userService
        .getUserByUsername(localStorage.getItem('logged'))
        .then((resp) => {
          if (resp.role.toLowerCase() == 'administrador de sistemas') {
            this.setIsAdm(true);
          }
        });
    } catch (err) {
      console.log('Error: ' + err);
    }
  }

  setIsAdm(state: boolean) {
    this.isAdm = state;
  }
}
