import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualChartComponent } from './individual-chart.component';

describe('IndividualChartComponent', () => {
  let component: IndividualChartComponent;
  let fixture: ComponentFixture<IndividualChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
