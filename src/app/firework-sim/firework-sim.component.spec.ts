import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireworkSimComponent } from './firework-sim.component';

describe('FireworkSimComponent', () => {
  let component: FireworkSimComponent;
  let fixture: ComponentFixture<FireworkSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireworkSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireworkSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
