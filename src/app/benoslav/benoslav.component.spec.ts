import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenoslavComponent } from './benoslav.component';

describe('BenoslavComponent', () => {
  let component: BenoslavComponent;
  let fixture: ComponentFixture<BenoslavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenoslavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenoslavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
