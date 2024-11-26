import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-epargne-placements',
  templateUrl: './epargne-placements.component.html',
  styleUrls: ['./epargne-placements.component.css']
})
export class EpargnePlacementsComponent {
  constructor(public languageService: LanguageService, private router: Router, private viewportScroller: ViewportScroller,) { }
  goToAccueil(): void {
    this.router.navigate(['/']);
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
    }, 0);
  }
}