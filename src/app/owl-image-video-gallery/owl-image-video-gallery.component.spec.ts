import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlImageVideoGalleryComponent } from './owl-image-video-gallery.component';

describe('OwlImageVideoGalleryComponent', () => {
  let component: OwlImageVideoGalleryComponent;
  let fixture: ComponentFixture<OwlImageVideoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlImageVideoGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlImageVideoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
