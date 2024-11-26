import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BeaService } from 'src/app/services/bea/bea.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-epargner',
  templateUrl: './epargner.component.html',
  styleUrls: ['./epargner.component.css']
})
export class EpargnerComponent {
  constructor(public languageService: LanguageService, private router: Router, private viewportScroller: ViewportScroller,private beaService:BeaService) { }
  goToAccueil(): void {
    this.router.navigate(['/']);
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
    }, 0);
  }
  navigateTo(): void {
   
      this.beaService.openNewWindowExtern("https://www.sgbv.dz/");
    
  }
}
