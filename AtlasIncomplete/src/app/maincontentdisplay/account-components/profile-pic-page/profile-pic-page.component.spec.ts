import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicPageComponent } from './profile-pic-page.component';

describe('ProfilePicPageComponent', () => {
  let component: ProfilePicPageComponent;
  let fixture: ComponentFixture<ProfilePicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
