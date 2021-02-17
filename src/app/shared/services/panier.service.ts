import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root'
})

export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(<Ingredient[]><unknown>null);

  constructor() {}

  addPanier(ingredients: Ingredient[]): void {
    console.log("service ajouter au panier");
    console.log(ingredients);
    
    
    const currentValue = this.ingredients$.value;
    console.log("valeur courrante");
    
    console.log(this.ingredients$.value);
    
    if (currentValue) {
      const obj = currentValue.concat(ingredients);
     
     const obj1 = obj.reduce((acc,value) => {
         
      if (acc[value.name]) {
      acc[value.name] += value.quantity;
     } else {
      acc[value.name] = value.quantity;
       }
       console.log("acc final");
       
       console.log(acc);
       

      return acc;
     }, {} as {[key: string]: number});
      console.log("objet 2");
      console.log(obj1);

        const result = Object.keys(obj1).map(key => ({
                                   name: key,
                                    quantity: obj1[key]
                                   }));
     
     this.ingredients$.next(result);
   // this.ingredients$.next(obj);
    } else {
     this.ingredients$.next(ingredients);
    }
  }
}