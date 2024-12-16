import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDistancePageComponent } from './coordinator-distance-page.component';

describe('CoordinatorDistancePageComponent', () => {
  let component: CoordinatorDistancePageComponent;
  let fixture: ComponentFixture<CoordinatorDistancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatorDistancePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordinatorDistancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
