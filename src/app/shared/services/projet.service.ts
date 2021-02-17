import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Projet } from '../interfaces/projet.interface';

@Injectable({
  providedIn: 'root'
})

export class ProjetService {
  public projets$: BehaviorSubject<Projet[]> = new BehaviorSubject(null); 

  public getProjet(index: number): Observable<Projet> {
    return this.projets$.pipe(
      filter((projets: Projet[]) => projets !== null),
      
      map((projets: Projet[]) => {
        return projets[index];
      })
    );
    
  }


  constructor(private http: HttpClient, private router: Router) {
   // this.seed();
    
}
public seed() {
  this.http.post('https://restapi.fr/api/projets',  {
    id: 0,
    name: "Projet 1",
    
  },).subscribe();

}

public fetchProjets(): Observable<Projet[]> {
  return this.http.get("https://restapi.fr/api/projets").pipe(
    tap((projets: Projet[])=> {
      this.projets$.next(projets);
    })
  );
}

public deleteProjet(projet: Projet): Observable<Projet> {
    this.http.delete(`https://restapi.fr/api/projets/${projet.id}`)
    .subscribe((projet: Projet) => this.router.navigateByUrl(""));

  return null; 
}

}
