import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserCardComponent } from './random-user-card.component';

describe('RandomUserCardComponent', () => {
  let component: RandomUserCardComponent;
  let fixture: ComponentFixture<RandomUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
