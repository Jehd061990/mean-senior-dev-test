import { Routes } from "@angular/router";
import { ExternalServiceListComponent } from "./external-service-list/external-service-list.component";

export const routes: Routes = [
  { path: "", component: ExternalServiceListComponent, title: "Employee List" },
];
