import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiswebappComponent } from './thiswebapp.component';

describe('ThiswebappComponent', () => {
  let component: ThiswebappComponent;
  let fixture: ComponentFixture<ThiswebappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiswebappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiswebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
