import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
@Input() user: {name: string, email: string}={name: 'arvind', email: 'arvidce@gmail.com'};
}
