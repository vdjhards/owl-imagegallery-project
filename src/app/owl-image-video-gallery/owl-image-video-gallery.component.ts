import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, Inject } from '@angular/core';
import { CarouselComponent, OwlOptions, SlidesOutputData, CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-owl-image-video-gallery',
  templateUrl: './owl-image-video-gallery.component.html',
  styleUrls: ['./owl-image-video-gallery.component.scss']
})
export class OwlImageVideoGalleryComponent implements OnInit {

  constructor() {}

  @ViewChild('thumbnailcarousel') thumbnailcarousel? : CarouselComponent;
  @ViewChild('singalcarousel') singalcarousel? : CarouselComponent;
  @ViewChild('myModal', {static : false}) myModal?:ElementRef;


  selectedImage?: string;

  
  @Input() owlArrayData: any;

  @Input() maxItems: number = 5;

  @Input() singalcarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoWidth: true,
    navSpeed: 700,
    navText: ['<img src="assets/images/chevron-left.svg" class="accordian-arrow">', '<img src="assets/images/chevron-right.svg" class="accordian-arrow">'],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
    nav: false,
  };

  @Input() thumbnailcarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoWidth: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
    nav: true,
  };
  
  

  ngOnInit():void{
    this.singalcarousel?.changed.subscribe(res => {
      console.log(res)
    })
  }

  openimage(slideid : any){
    this.singalcarousel?.to(slideid)
    this.selectedImage = slideid;
  }

  next(){
    this.singalcarousel?.next()
    this.thumbnailcarousel?.next()
    this.singalcarousel?.changed.subscribe(res => {
      res.slides?.filter(x => {
        this.selectedImage = x.id + res.startPosition;
      })
    })
  }

  prv(){
    this.singalcarousel?.prev();
    this.thumbnailcarousel?.prev();
    this.singalcarousel?.changed.subscribe(res => {
      res.slides?.filter(x => {
        this.selectedImage = x.id + res.startPosition;
      })
    })
    
  }

  fullviewopenmodel(slideid : any){
    
  }
}
