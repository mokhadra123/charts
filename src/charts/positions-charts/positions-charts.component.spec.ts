import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsChartsComponent } from './positions-charts.component';

describe('PositionsChartsComponent', () => {
  let component: PositionsChartsComponent;
  let fixture: ComponentFixture<PositionsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
