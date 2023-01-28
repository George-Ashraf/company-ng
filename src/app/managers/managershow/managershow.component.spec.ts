import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagershowComponent } from './managershow.component';

describe('ManagershowComponent', () => {
  let component: ManagershowComponent;
  let fixture: ComponentFixture<ManagershowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagershowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
