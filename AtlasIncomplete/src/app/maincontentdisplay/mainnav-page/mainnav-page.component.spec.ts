import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavPageComponent } from './mainnav-page.component';

describe('MainnavPageComponent', () => {
  let component: MainnavPageComponent;
  let fixture: ComponentFixture<MainnavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
