import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorbenComponent } from './torben.component';

describe('TorbenComponent', () => {
  let component: TorbenComponent;
  let fixture: ComponentFixture<TorbenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorbenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorbenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
