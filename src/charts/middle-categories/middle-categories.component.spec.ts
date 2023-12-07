import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleCategoriesComponent } from './middle-categories.component';

describe('MiddleCategoriesComponent', () => {
  let component: MiddleCategoriesComponent;
  let fixture: ComponentFixture<MiddleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
