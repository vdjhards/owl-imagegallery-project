import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwlImageVideoGalleryExamplesComponent } from './owl-image-video-gallery-examples.component';

const routes: Routes = [
  {
    path: '',
    component:OwlImageVideoGalleryExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwlImageVideoGalleryExamplesRoutingModule { }
