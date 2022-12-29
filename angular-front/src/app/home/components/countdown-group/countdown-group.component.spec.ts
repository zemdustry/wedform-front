import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownGroupComponent } from './countdown-group.component';

describe('CountdownGroupComponent', () => {
  let component: CountdownGroupComponent;
  let fixture: ComponentFixture<CountdownGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
