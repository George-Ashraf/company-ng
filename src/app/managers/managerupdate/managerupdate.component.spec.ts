import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerupdateComponent } from './managerupdate.component';

describe('ManagerupdateComponent', () => {
  let component: ManagerupdateComponent;
  let fixture: ComponentFixture<ManagerupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
