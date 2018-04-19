import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateApiComponent } from './translate-api.component';

describe('TranslateApiComponent', () => {
  let component: TranslateApiComponent;
  let fixture: ComponentFixture<TranslateApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
