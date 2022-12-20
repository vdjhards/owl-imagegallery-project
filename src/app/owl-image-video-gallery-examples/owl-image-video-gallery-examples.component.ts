import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-image-video-gallery-examples',
  templateUrl: './owl-image-video-gallery-examples.component.html',
  styleUrls: ['./owl-image-video-gallery-examples.component.scss']
})
export class OwlImageVideoGalleryExamplesComponent implements OnInit {

  constructor() { }

  slidesStore = [
    
    {
      "id": "1",
      "title": "Slider1",
      "imageUrl": "./assets/images/img1.jpg",
      "alt": "1"

    },
    {
      "id": "2",
      "title": "Slider2",
      "imageUrl": "./assets/images/img2.jpg",
      "alt": "2"
    },
    {
      "id": "3",
      "title": "Slider3",
      "imageUrl": "./assets/images/img3.jpg",
      "alt": "3"

    },
    {
      "id": "4",
      "title": "Slider4",
      "imageUrl": "./assets/images/img4.jpg",
      "alt": "4"
    },
    {
      "id": "5",
      "title": "Slider5",
      "imageUrl": "./assets/images/img5.jpg",
      "alt": "5"

    },
    {
      "id": "6",
      "title": "Slider6",
      "imageUrl": "./assets/images/img6.jpg",
      "alt": "6"
    }

  ]

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   margin: 24,
  //   autoplay:false,
  //   navText: ['<img src="assets/images/chevron-left.svg" class="accordian-arrow">', '<img src="assets/images/chevron-right.svg" class="accordian-arrow">'],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     575: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 2,
  //     },
  //     991: {
  //       items: 3,
  //     },
  //     1024: {
  //       items: 4,
  //     },
  //   },
  //   nav: false
  // }

  ngOnInit(): void {
  }

}
