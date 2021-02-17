import { Routes } from "@angular/router";

import { ProjetContainerComponent } from "./projet-container/projet-container.component";
import { ProjetDetailComponent } from "./projet-container/projet-detail/projet-detail.component";
import { ProjetFormComponent } from "./projet-container/projet-form/projet-form.component";
import { ProjetListComponent } from "./projet-container/projet-list/projet-list.component";

export const   PROJET_ROUTES: Routes = [
{path: "", component: ProjetContainerComponent},
{path: "list", component: ProjetListComponent},
{path: ":index", component: ProjetDetailComponent},
{path: "ajouter", component: ProjetFormComponent}


]