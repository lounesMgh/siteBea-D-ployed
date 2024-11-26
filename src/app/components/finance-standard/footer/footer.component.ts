// footer.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { Footer } from './footer';
import { LanguageService } from 'src/app/services/language/language.service';
import { BeaService } from 'src/app/services/bea/bea.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  urlFacebook: string = "https://www.facebook.com/BEAlgerie/";
  urlInstagram: string = "https://www.instagram.com/banque_bea/?hl=en";
  urlLinkedin: string = "https://www.linkedin.com/company/banque-ext%C3%A9rieure-d-alg%C3%A9rie/mycompany/";
  footerItems: Footer[] = [
    {
      title: 'Navigations',
      sousMenu: [
        { title: 'Accueil', url: '/', id: '11' },
        { title: 'Financements entreprises', url: '/financements-entreprises', id: '12' },
        { title: 'Financements particuliers', url: '/financements-particuliers', id: '13' },
        { title: 'Solutions monétique', url: '/solutions-monetique', id: '14' },
        { title: 'Commerce international', url: '/commerce-international', id: '15' },
        { title: 'Nos contacts', url: '/nos-contacts', id: '16' },
        { title: 'Nos actualités', url: '/nos-actualités', id: '17' }
      ]
    },
    {
      title: 'Nos services',
      sousMenu: [
        { title: 'Ouvrir un compte bancaire', url: '/finance-standard/services/conditionOuvertureCompte', id: '21' },
        { title: 'Epargner', url: '/finance-standard/services/epargner', id: '22' },
        { title: 'Cours des principales monnaies', url: '/finance-standard/services/CoursPrincipalesMonnaies', id: '23' },
        { title: 'Simulateur de crédit en ligne', url: '/finance-standard/services/simulateurDeCreditEnLigne', id: '24' },
        { title: "Appels d'offres", url: '/finance-standard/services/appelsOffres', id: '25' },
        { title: 'Nos tarif bancaires', url: '/finance-standard/services/TarifBancaires', id: '26' }
      ]
    },
    {
      title: 'Nous contacter',
      sousMenu: [
        { icon: 'fa-solid fa-envelope', title: 'BP 323 ALGER GARE-R.C.0011452 B 00.', id: '31' },
        { icon: 'fas fa-map-marker-alt text-white', title: 'SIÈGE SOCIAL: 11 BOULEVARD COLONEL AMIROUCHE - ALGER BP DIRECTION GÉNÉRALE: 42 RUE DES FRÈRES BOUADOU · 16005 BIR MOURAD RAÏS, ALGER · ALGERIE', id: '32' }
      ]
    },
    {
      title: "L'application E-Banking",
      sousMenu: [
        { id: '1', img: '../../../assets/images/Bea/Applestore.png' },
        { id: '2', img: '../../../assets/images/Bea/google-play-store.png' }
      ]
    }
  ];

  @Output() subMenuSelected = new EventEmitter<string>();

  constructor(
    public languageService: LanguageService,
    private beaService: BeaService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) { }

  openEbankingLink(id: string): void {
    if (id === '1') {
      this.beaService.openNewWindowExtern('https://apps.apple.com/us/app/bea-mobile/id1551818054');
    } else if (id === '2') {
      this.beaService.openNewWindowExtern('https://play.google.com/store/apps/details?id=com.aebs.p2bbea&hl=fr');
    }
  }
  navigateFacebook(): void {
    this.beaService.openNewWindowExtern(this.urlFacebook);
  }
  navigateInstagram(): void {
    this.beaService.openNewWindowExtern(this.urlInstagram);
  }
  navigateLinkedin(): void {
    this.beaService.openNewWindowExtern(this.urlLinkedin);
  }
  navigateTo(route: string, subMenuId: string) {
    this.subMenuSelected.emit(subMenuId); // Émet l'événement avec l'id du sous-menu
    this.router.navigate([route]);
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
    }, 0);
  }
}
