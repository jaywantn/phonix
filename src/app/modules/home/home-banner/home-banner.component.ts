import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
declare var tjq: any;
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styles: [],
})
export class HomeBannerComponent implements OnInit {
  id: any;
  mySubscription: any;
  loadAPI: Promise<any>;
  banner: any= [];

  constructor(private myService: HomeService) {
    this.loadAPI = new Promise((resolve) => {
      const node = this.loadScript();
      if (node) {
        node.onload = () => {
          resolve(true);
        };
      } else {
        resolve(true);
      }
    });
  }

  loadScript() {
    let node;
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('revolution_slider')) {
        isFound = true;
      }
    }

    if (!isFound) {
      const scriptLoad = [
        'assets/components/revolution_slider/js/jquery.themepunch.tools.min.js',
        'assets/components/revolution_slider/js/jquery.themepunch.revolution.min.js',
        'assets/components/flexslider/jquery.flexslider-min.js',
        'assets/components/jquery.bxslider/jquery.bxslider.min.js',
        'assets/js/jquery.stellar.min.js',
        'assets/js/waypoints.min.js',
        'assets/js/theme-scripts.js'
      ];
      for (let i = 0; i < scriptLoad.length; i++) {
        node = document.createElement('script');
        node.type = 'text/javascript';
        node.src = scriptLoad[i];
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('body')[0].appendChild(node);
      }
      return node;
    }
    return node;
  }

  ngOnInit() {
    this.getBanner();
  }

  getBanner() {
    this.myService.getBanner().subscribe(response => {
      this.banner = response.map(item => {
          console.log(item);
          return item;
        });
    });
  }
}
