import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTouristComponent } from './add-tourist.component';

describe('AddTouristComponent', () => {
  let component: AddTouristComponent;
  let fixture: ComponentFixture<AddTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTouristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
