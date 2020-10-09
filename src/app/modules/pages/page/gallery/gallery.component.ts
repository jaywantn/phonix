import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { PagesService } from '../../pages.service';
import { Title, Meta } from '@angular/platform-browser';
import { AppConstants } from 'src/app/app.constants';
import { LoadingService } from 'src/app/core/service/loading.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[];
  galleryList: any;
  imageList: any;
  seoDetails: any;
  constructor(
    private pagesService: PagesService,
    public gallery: Gallery,
    private titleService: Title,
    private meta: Meta,
    private loaderService: LoadingService,
    public appConstants: AppConstants) { }

  ngOnInit(): void {
    this.getGallery();
  }
  getGallery(): void {
    this.loaderService.showLoader();
    this.pagesService.getGallery().subscribe((data: any[]) => {
      this.galleryList = data;
      this.imageList = this.galleryList.galleryList;
      // 1. Create gallery items
      this.items = this.imageList.map(item =>
        new ImageItem({
            src: this.appConstants.bannerURL + 'gallery/' + item.g_img,
            thumb: this.appConstants.bannerURL + 'gallery/' + item.g_img
        })
      );

      this.imageList.map((item) => {
        item.g_img = this.appConstants.bannerURL + 'gallery/' + item.g_img;
        return item;
      });

      this.gallery.ref().load(this.items);
      const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

      // (Optional) Set custom gallery config to this lightbox
      lightboxGalleryRef.setConfig({
        imageSize: ImageSize.Cover,
        thumbPosition: ThumbnailsPosition.Top
      });

      // 3. Load the items into the lightbox
      lightboxGalleryRef.load(this.items);
      this.loaderService.hideLoader();
      this.seoDetails = this.galleryList.seo;
      this.seoGenerate();
    });
  }

  seoGenerate(): void {
    this.titleService.setTitle(this.seoDetails.seo_title);
    this.meta.updateTag({name: 'keywords', content: this.seoDetails.seo_keyword});
    this.meta.updateTag({name: 'description', content: this.seoDetails.seo_description}, 'name="description"');
  }
}

