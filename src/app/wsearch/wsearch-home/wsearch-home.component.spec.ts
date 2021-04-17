import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsearchHomeComponent } from './wsearch-home.component';

describe('WsearchHomeComponent', () => {
  let component: WsearchHomeComponent;
  let fixture: ComponentFixture<WsearchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsearchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
