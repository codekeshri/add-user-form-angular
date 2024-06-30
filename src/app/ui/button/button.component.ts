import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Output() addUserEvent = new EventEmitter<void>();
ngOnInit() {
  console.log('Button component loaded');
}

addUser() {
  console.log('Add user button clicked');  
  this.addUserEvent.emit(); 
}


}