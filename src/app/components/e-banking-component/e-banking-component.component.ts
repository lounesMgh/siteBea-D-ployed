import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-e-banking-component',
  templateUrl: './e-banking-component.component.html',
  styleUrls: ['./e-banking-component.component.css']
})
export class EBankingComponentComponent {
  constructor(public languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller) {

  }
  url: string = '/EbankingDetails';
  navigateTo(url: string): void {
    if (url) {
      this.router.navigate([url]);
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
      }, 0);
    }
  }
}
