import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdsHomeComponent } from './modds-home.component';

describe('ModdsHomeComponent', () => {
  let component: ModdsHomeComponent;
  let fixture: ComponentFixture<ModdsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModdsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModdsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
