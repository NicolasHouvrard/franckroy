import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public user: User ;

  
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    
     this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            
        this.userService.getuser(+<string>paramMap.get("id")).subscribe((user: User) => {
          console.log(user);
          
          this.user = user;});

         
          
        });
      
  }

}
