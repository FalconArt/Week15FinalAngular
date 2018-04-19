import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoApiComponent } from './photo-api.component';

describe('PhotoApiComponent', () => {
  let component: PhotoApiComponent;
  let fixture: ComponentFixture<PhotoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
