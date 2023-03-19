import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCountdownComponent } from './countdown-custom.component';

describe('CustomCountdownComponent', () => {
  let component: CustomCountdownComponent;
  let fixture: ComponentFixture<CustomCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
