import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlImageVideoGalleryExamplesComponent } from './owl-image-video-gallery-examples.component';

describe('OwlImageVideoGalleryExamplesComponent', () => {
  let component: OwlImageVideoGalleryExamplesComponent;
  let fixture: ComponentFixture<OwlImageVideoGalleryExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlImageVideoGalleryExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlImageVideoGalleryExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
