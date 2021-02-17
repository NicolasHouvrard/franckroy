import { Routes } from "@angular/router"
import { UserContainerComponent } from "./user-container/user-container.component"
import { UserDetailComponent } from "./user-container/user-detail/user-detail/user-detail.component"
import { UserFormComponent } from "./user-container/user-form/user-form.component"

export const UTILISATEUR_ROUTES: Routes = [
  { path: "", component: UserContainerComponent, children: [
    {path: "new", component: UserFormComponent},
    { path: ":id", component: UserDetailComponent},
    {path: "", redirectTo: "0", pathMatch: "full"}
]}
];