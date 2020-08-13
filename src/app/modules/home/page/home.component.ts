import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
declare var tjq: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   // projects$: Observable<Project[]> = this.projectService.getAll();
   banner; 
  constructor(
    private myService: HomeService
  ) {
  }
 
  ngOnInit() { 

    
    console.log( this.myService.getBanner());
  }
  ngAfterViewInit(): void { 
    this.initScript();
  }
  initScript() {
    tjq(document).ready(function () {
      tjq('.revolution-slider').revolution({
        sliderType: 'standard',
        sliderLayout: 'auto',
        dottedOverlay: 'none',
        delay: 9000,
        navigation: {
          keyboardNavigation: 'off',
          keyboard_direction: 'horizontal',
          mouseScrollNavigation: 'off',
          mouseScrollReverse: 'default',
          onHoverStop: 'on',
          touch: {
            touchenabled: 'on',
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: 'horizontal',
            drag_block_vertical: false,
          },
          arrows: {
            style: 'default',
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '',
            left: {
              h_align: 'left',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },
            right: {
              h_align: 'right',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },
          },
        },
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1170,
        gridheight: 646,
        lazyType: 'none',
        shadow: 0,
        spinner: 'spinner4',
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: 'off',
        autoHeight: 'off',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: 'off',
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: false,
        },
      });
    });
  }

}
