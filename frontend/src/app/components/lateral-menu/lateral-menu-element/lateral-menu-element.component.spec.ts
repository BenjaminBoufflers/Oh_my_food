import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralMenuElementComponent } from './lateral-menu-element.component';

describe('LateralMenuElementComponent', () => {
  let component: LateralMenuElementComponent;
  let fixture: ComponentFixture<LateralMenuElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LateralMenuElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralMenuElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
