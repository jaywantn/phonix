import { ConfigService } from './config.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  generalDetails: any = [];
  isLoading: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private configService: ConfigService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe(data => {
        this.titleService.setTitle(data.title);
      });
    });
    const generalData = JSON.parse(sessionStorage.getItem('generalDetails'));
    if (generalData === null ){
      this.getDetails();
    }
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  getDetails(): any {
    this.configService.generalDetails().subscribe((data: any[]) => {
      this.generalDetails = data;
      sessionStorage.setItem('generalDetails', JSON.stringify(this.generalDetails));
    });
  }
}
