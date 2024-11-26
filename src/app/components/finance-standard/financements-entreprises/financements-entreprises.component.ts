import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-financements-entreprises',
  templateUrl: './financements-entreprises.component.html',
  styleUrls: ['./financements-entreprises.component.css']
})
export class FinancementsEntreprisesComponent {
  url: string='/finance-standard/financementEntreprises/conditionsOuvertureCompte'
  constructor(public languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller) {

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
