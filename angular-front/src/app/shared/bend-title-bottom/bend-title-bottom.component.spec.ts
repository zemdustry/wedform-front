import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BendTitleBottomComponent } from './bend-title-bottom.component';

describe('BendTitleBottomComponent', () => {
  let component: BendTitleBottomComponent;
  let fixture: ComponentFixture<BendTitleBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BendTitleBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BendTitleBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
