import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input()   public users: User[] = [];
  @Input()  public selectedUser!: User;
  @Output() private changeUser: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public selectUser(i: number): void{
    console.log("users");
    console.log(this.users);
    
    
    console.log(i);
    this.changeUser.emit(i);
    
  }
}
