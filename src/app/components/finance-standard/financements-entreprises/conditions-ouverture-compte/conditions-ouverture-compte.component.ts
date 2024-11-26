import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-conditions-ouverture-compte',
  templateUrl: './conditions-ouverture-compte.component.html',
  styleUrls: ['./conditions-ouverture-compte.component.css']
})
export class ConditionsOuvertureCompteComponent {
  constructor(public languageService: LanguageService, private router: Router, private viewportScroller: ViewportScroller,) { }
  goToAccueil(): void {
    this.router.navigate(['/financements-entreprises']);
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
    }, 0);
  }
}
