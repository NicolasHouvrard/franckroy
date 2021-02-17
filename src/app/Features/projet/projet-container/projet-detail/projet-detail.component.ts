import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Projet } from 'src/app/shared/interfaces/projet.interface';
import { ProjetService } from 'src/app/shared/services/projet.service';

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.scss']
})
export class ProjetDetailComponent implements OnInit {
  public projet!: Projet;
  public subscription: Subscription;
 // private index: string;
  
  constructor(               private activatedRoute: ActivatedRoute,
               private projetService: ProjetService )  {
    
  }

  ngOnInit(): void {
this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  
   this.projetService.getProjet(+<string>paramMap.get('index')).subscribe((projet: Projet) => {
        this.projet = projet;
   });
  
});

  }

}
