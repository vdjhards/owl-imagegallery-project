import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlImageVideoGalleryComponent } from './owl-image-video-gallery.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    OwlImageVideoGalleryComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[
    OwlImageVideoGalleryComponent
  ]
})
export class OwlImageVideoGalleryModule { }
