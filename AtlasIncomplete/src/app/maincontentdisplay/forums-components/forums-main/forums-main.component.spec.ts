import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsMainComponent } from './forums-main.component';

describe('ForumsMainComponent', () => {
  let component: ForumsMainComponent;
  let fixture: ComponentFixture<ForumsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
