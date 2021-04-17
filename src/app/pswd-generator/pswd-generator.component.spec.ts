import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PswdGeneratorComponent } from './pswd-generator.component';

describe('PswdGeneratorComponent', () => {
  let component: PswdGeneratorComponent;
  let fixture: ComponentFixture<PswdGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PswdGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PswdGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
