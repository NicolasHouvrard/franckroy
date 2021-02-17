import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(null);  

 
 public getuser(index: number): Observable<User> {
      return this.users$.pipe(
        filter((users: User[]) => users !== null),
           map((users: User[]) =>{
                 if(index === 0) {
                     console.log("user iindex 0");
                     console.log(users[index]);
                   return users[index];}
                 if(index !==0) {
                   const i = users.findIndex((user) => user.id === index );
                    console.log(i);
                    return users[i];
                    }
            } ),
      );
 }


public addUser(user: User): void {
    const value = this.users$.value;
    this.users$.next([...value, user]);
}
public edituser(editeduser: User): void {
  const value = this.users$.value;
  this.users$.next(value.map((user: User) => {
      if (user.username === editeduser.username) {
        return editeduser;
      }
      else{
        return user;
      }
  }));

}
public fetchUsers(): Observable<User[]> {
return this.http.get("http://localhost/FranckRoy/public/api/user/").pipe(
  tap((users: User[])=> {
    this.users$.next(users);
  })
);
}
  constructor(private http: HttpClient) { }
}
