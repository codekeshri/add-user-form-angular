import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
