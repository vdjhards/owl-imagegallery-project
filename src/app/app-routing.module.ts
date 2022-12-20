import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: 'owlcarouselexamples', pathMatch: 'full' },
  { path: 'owlcarouselexamples', loadChildren: () => import(`./owl-image-video-gallery-examples/owl-image-video-gallery-examples.module`).then(m => m.OwlImageVideoGalleryExamplesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
