import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/shared/interfaces/projet.interface';
import { ProjetService } from 'src/app/shared/services/projet.service';

@Component({
  selector: 'app-projet-container',
  templateUrl: './projet-container.component.html',
  styleUrls: ['./projet-container.component.scss']
})
export class ProjetContainerComponent implements OnInit {
  public projets$: Observable<Projet[]> = this.projetService.projets$ ;
  
  constructor(private projetService: ProjetService) {    }
  

  ngOnInit(): void {
 
  }

}
