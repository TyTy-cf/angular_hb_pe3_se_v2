import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardElixirsComponent } from './wizard-elixirs.component';

describe('WizardElixirsComponent', () => {
  let component: WizardElixirsComponent;
  let fixture: ComponentFixture<WizardElixirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardElixirsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardElixirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
