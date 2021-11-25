import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User,gender,role } from '../models/User';

@Component({
  selector: 'parte-seconda-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() users!:User[]
@Output() showdetail = new EventEmitter<User>()
  constructor() { }

  ngOnInit(): void {
  }

}
