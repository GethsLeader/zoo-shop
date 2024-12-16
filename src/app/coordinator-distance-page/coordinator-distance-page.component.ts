import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { CoordinatorDistanceComponent } from '../coordinator-distance/coordinator-distance.component';

@Component({
  selector: 'app-coordinator-distance-page',
  standalone: true,
  imports: [
    CoordinatorDistanceComponent,
  ],
  templateUrl: './coordinator-distance-page.component.html',
  styleUrl: './coordinator-distance-page.component.scss'
})
export class CoordinatorDistancePageComponent implements AfterViewInit {
 public coordinatorComponent$ = viewChild(CoordinatorDistanceComponent);
 public testFocus$ = viewChild('testFocus', { read: ElementRef });

 constructor() {}

 public ngAfterViewInit(): void {
  //this.focusTest();
  //this.focusTest2();
 }

 public focusTest(): void {
  this.coordinatorComponent$()?.focus();
  console.log('component focused!');
 }

 public focusTest2(): void {
  this.testFocus$()?.nativeElement.focus();
  console.log('component focused from element ref!');
 }
}
