import { Routes } from "@angular/router";
import { AffichageComponent } from "./affichage/affichage.component";

export const TEST_ROUTES: Routes = [
    {
        path: "", component: AffichageComponent, children: [
          ] 
    }
];