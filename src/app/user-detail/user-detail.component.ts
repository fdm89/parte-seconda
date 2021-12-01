import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {User, gender, role} from '../models/User';

@Component({
  selector: 'parte-seconda-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input() selecteduser?:User | null
@Output() closeDetail = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
