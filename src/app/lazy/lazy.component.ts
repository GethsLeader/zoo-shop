import { Component } from '@angular/core';
import {EvenLazierComponent} from "./even-lazier/even-lazier.component";

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [
    EvenLazierComponent
  ],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss'
})
export class LazyComponent {}
