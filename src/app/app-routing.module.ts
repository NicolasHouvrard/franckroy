import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




export const APP_ROUTES: Routes = [
  
  { path: "", loadChildren: ()=> import('./Features/homepage/homepage.module').then( m => m.HomepageModule)},
  { path: "recettes", loadChildren: () =>import('./Features/cocktail/cocktail.module').then(m => m.CocktailModule)},
  { path: "panier", loadChildren: () => import('./Features/panier/panier.module').then(m=> m.PanierModule)},
  { path: "users", loadChildren: () => import('./Features/utilisateur/utilisateur.module').then(m => m.UtilisateurModule)},
  { path: "affichage", loadChildren: () => import('./Features/test/test.module').then(m => m.TestModule)},
  { path: "projet", loadChildren: () => import('./Features/projet/projet.module').then(m => m.ProjetModule)},

  {path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
