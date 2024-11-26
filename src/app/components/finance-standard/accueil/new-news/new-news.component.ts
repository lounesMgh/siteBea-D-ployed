import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BeaService } from 'src/app/services/bea/bea.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.css']
})
export class NewNewsComponent {
  url:string="/articleDetails"
  constructor(public languageService: LanguageService, 
    private beaService: BeaService, private router: Router,
    private viewportScroller: ViewportScroller) {
  }


  openPresentation(): void {
      this.beaService.openNewWindowExtern('https://www.facebook.com/watch/?v=1155346892146030');
  }
  navigateTo(url: string): void {
    if (url) {
      this.router.navigate([url]);
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
      }, 0);
    }
  }
}
