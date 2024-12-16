import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {StatusComponent} from "./status/status.component";
import { CoordinatorDistancePageComponent } from './coordinator-distance-page/coordinator-distance-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'status', component: StatusComponent },
  { path: 'coordinator', component: CoordinatorDistancePageComponent },
];
