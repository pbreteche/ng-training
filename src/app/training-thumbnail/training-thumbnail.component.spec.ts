import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingThumbnailComponent } from './training-thumbnail.component';

describe('TrainingThumbnailComponent', () => {
  let component: TrainingThumbnailComponent;
  let fixture: ComponentFixture<TrainingThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
