import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechComponent } from './add-tech.component';

describe('AddTechComponent', () => {
  let component: AddTechComponent;
  let fixture: ComponentFixture<AddTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
