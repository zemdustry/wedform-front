import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BendTitleTopComponent } from './bend-title-top.component';

describe('BendTitleTopComponent', () => {
  let component: BendTitleTopComponent;
  let fixture: ComponentFixture<BendTitleTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BendTitleTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BendTitleTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
