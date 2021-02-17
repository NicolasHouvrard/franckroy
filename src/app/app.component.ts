import { Component, OnInit } from '@angular/core';
import { Cocktail } from './shared/interfaces/cocktail.interface';
import { CocktailService } from './shared/services/cocktail.service';
import { ProjetService } from './shared/services/projet.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor ( private cocktailService: CocktailService, private userService: UserService, private projetService: ProjetService) {}

  ngOnInit () {
    this.cocktailService.fetchCocktails().subscribe();
    this.userService.fetchUsers().subscribe();
    this.projetService.fetchProjets().subscribe();
    console.log(this.projetService.projets$);
    console.log("import des données terminé");
    
    
  }
 
}
