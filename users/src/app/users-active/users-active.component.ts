import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-users-active',
  templateUrl: './users-active.component.html',
  styleUrls: ['./users-active.component.css']
})
export class UsersActiveComponent implements OnInit {
  users: String[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number){
    this.userService.setToInactive(id);
  }

}
