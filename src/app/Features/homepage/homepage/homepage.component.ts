import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'], 
  animations: [ 
    trigger('square', [
      state('normal', style({
        backgroundColor: "White",
        border: "2px solid #444"
      })),
      state("wild", style({
        backgroundColor: "red",
        border: "none",
        borderRadius: "50%"
      })),
     
      transition("* =>*", [
        style({
          backgroundColor: "blue",
        }),
        animate(400),
      ]),
      
    ]),
  ],
})
export class HomepageComponent implements OnInit {
  public state ="normal";


  constructor(private router: Router) { }

  ngOnInit(): void {
    
    
  }

  public redirection() {
      this.router.navigateByUrl("users");
  }

}
