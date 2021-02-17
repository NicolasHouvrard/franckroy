import { Component,  Input, } from '@angular/core';
import { Observable, } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent  {
 public users$: Observable<User[]> = this.userService.users$;


 @Input()  public selectedUser!: User;

  
//  @Output() private changeUser: EventEmitter<number> = new EventEmitter();
 
  constructor(private userService: UserService) { }

  

 
}
