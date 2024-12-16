import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDistanceComponent } from './coordinator-distance.component';

describe('CoordinatorDistanceComponent', () => {
  let component: CoordinatorDistanceComponent;
  let fixture: ComponentFixture<CoordinatorDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatorDistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordinatorDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
