import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechThumbnailComponent } from './tech-thumbnail.component';

describe('TechThumbnailComponent', () => {
  let component: TechThumbnailComponent;
  let fixture: ComponentFixture<TechThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
