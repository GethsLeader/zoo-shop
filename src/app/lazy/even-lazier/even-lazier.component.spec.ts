import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenLazierComponent } from './even-lazier.component';

describe('EvenLazierComponent', () => {
  let component: EvenLazierComponent;
  let fixture: ComponentFixture<EvenLazierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenLazierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenLazierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
