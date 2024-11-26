import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-e-banking-view',
  templateUrl: './e-banking-view.component.html',
  styleUrls: ['./e-banking-view.component.css']
})
export class EBankingViewComponent {
  constructor(public languageService: LanguageService, private router: Router, private viewportScroller: ViewportScroller,) { }
  goToAccueil(): void {
    this.router.navigate(['/']);
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
    }, 0);
  }
}
