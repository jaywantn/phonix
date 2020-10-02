import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { PagesService } from '../../pages.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[];
  galleryList :any;
  imageList: any;
  seoDetails: any;
  constructor(
    private pagesService: PagesService,
    public gallery: Gallery,
    private titleService: Title,
    private meta: Meta) { }

  ngOnInit() {
    // 1. Create gallery items
    this.items = data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    // Load items into the lightbox
    this.basicLightboxExample();

    // Load item into different lightbox instance
    // With custom gallery config
    this.withCustomGalleryConfig();
    this.getGallery();
  }
  getGallery(): any {
    this.pagesService.getGallery().subscribe((data: any[]) => {
      this.galleryList = data;
      this.imageList = this.galleryList.galleryList;
      this.seoDetails = this.galleryList.seo;
      this.seoGenerate();
     console.log('getGallery', this.imageList);
    });
  }
  seoGenerate(){
    this.titleService.setTitle(this.seoDetails.seo_title);
    this.meta.updateTag({name: 'keywords', content: this.seoDetails.seo_keyword});
    this.meta.updateTag({name: 'description', content: this.seoDetails.seo_description}, 'name="description"');
  }
  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  /**
   * Use custom gallery config with the lightbox
   */
  withCustomGalleryConfig() {

    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
];
