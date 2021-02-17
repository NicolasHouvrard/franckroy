import { Pipe, PipeTransform } from '@angular/core';
import { Projet } from '../interfaces/projet.interface';


@Pipe({
  name: "projetfilter"
})
export class ProjetPipe implements PipeTransform {

  transform(projets: Projet[], search: string): Projet[] {
    return projets.filter(
      projet => projet.name.toLowerCase().includes(search.toLowerCase()));
  }

}
