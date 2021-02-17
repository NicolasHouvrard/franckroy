import { Component, Input, OnInit } from '@angular/core';
import { Projet } from 'src/app/shared/interfaces/projet.interface';
import { ProjetService } from 'src/app/shared/services/projet.service';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit {
  @Input()   public projets: Projet[] = [];
  public search = '';
  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    console.log(this.projets)
  }

  public projetDelete(index:  number): void {
    this.projetService.deleteProjet(this.projets[index])
  }

}
