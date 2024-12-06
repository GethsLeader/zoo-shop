import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {StatusComponent} from "./status/status.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'status', component: StatusComponent },
];
