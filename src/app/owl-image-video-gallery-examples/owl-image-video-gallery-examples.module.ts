import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwlImageVideoGalleryExamplesRoutingModule } from './owl-image-video-gallery-examples-routing.module';
import { OwlImageVideoGalleryExamplesComponent } from './owl-image-video-gallery-examples.component';
import { OwlImageVideoGalleryModule } from '../owl-image-video-gallery/owl-image-video-gallery.module';


@NgModule({
  declarations: [
    OwlImageVideoGalleryExamplesComponent
  ],
  imports: [
    CommonModule,
    OwlImageVideoGalleryExamplesRoutingModule,
    OwlImageVideoGalleryModule
  ]
})
export class OwlImageVideoGalleryExamplesModule { }
