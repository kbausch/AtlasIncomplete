import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremechnavPageComponent } from './loremechnav-page.component';

describe('LoremechnavPageComponent', () => {
  let component: LoremechnavPageComponent;
  let fixture: ComponentFixture<LoremechnavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremechnavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremechnavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
