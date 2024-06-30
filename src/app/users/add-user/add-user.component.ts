import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';
import { UserListComponent } from '../user-list/user-list.component';



@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ButtonComponent, FormsModule, CommonModule, UserListComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  
  name: string = "";
  email: string = "";
  users: {name: string, email: string}[] = [];

  addUser(){
    this.users.push({name: this.name, email: this.email})
    this.name = "";
    this.email = "";
  }


}
