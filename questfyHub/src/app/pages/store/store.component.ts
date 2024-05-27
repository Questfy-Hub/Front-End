import { Component } from '@angular/core';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { StoreSpecialComponent } from '../../components/store-special/store-special.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [StoreItemComponent,StoreSpecialComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
