import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Footer } from '../../finance-standard/footer/footer';
import { BeaService } from 'src/app/services/bea/bea.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer-islamique',
  templateUrl: './footer-islamique.component.html',
  styleUrls: ['./footer-islamique.component.css']
})
export class FooterIslamiqueComponent {

  urlFacebook: string = "https://www.facebook.com/BEAlgerie/";
  urlInstagram: string = "https://www.instagram.com/banque_bea/?hl=en";
  urlLinkedin: string = "https://www.linkedin.com/company/banque-ext%C3%A9rieure-d-alg%C3%A9rie/mycompany/";
  footerItems: Footer[] = [
    {
      title: 'Navigation',
      sousMenu: [
        {
          title: 'Accueil',
          url: '/finance-islamique',
          id: '21'
        },
        {
          title: 'Nos comptes',
          url: '/finance-islamique/nos-comptes',
          id: '22'
        },
        {
          title: 'Financements particuliers',
          url: '/finance-islamique/financement-particuliers',
          id: '23'
        },
        {
          title: 'Financements entreprises',
          url: '/finance-islamique/financement-entreprises',
          id: '24'
        },
        {
          title: 'Nos conditions',
          url: '/finance-islamique/nos-conditions',
          id: '25'
        },
        {
          title: 'Nos contacts',
          url: '/finance-islamique/nos-contacts',
          id: '26'
        },
        {
          title: 'Nos actualités',
          url: '/finance-islamique/nos-actualités',
          id: '27'
        }
      ]
    },
    {
      title: 'Nos comptes',
      sousMenu: [
        {
          title: 'Le compte de dépot islamique',
          url: '/finance-islamique/nos-comptes',
          id: '22',
          idNav: '1'
        },
        {
          title: 'Le compte courant islamique',
          url: '/finance-islamique/nos-comptes',
          id: '22',
          idNav: '2'
        },
        {
          title: 'Le compte épargne islamique',
          url: '/finance-islamique/nos-comptes',
          id: '22',
          idNav: '3'
        },
        {
          title: 'Le compte de dépot CIINR',
          url: '/finance-islamique/nos-comptes',
          id: '22',
          idNav: '4'
        }
      ]
    },
    {
      title: 'Nous contacter',
      sousMenu: [
        { icon: 'fa-solid fa-envelope', title: 'BP 323 ALGER GARE-R.C.0011452 B 00.' },
        {
          icon: 'fas fa-map-marker-alt text-white',
          title: 'SIÈGE SOCIAL: 11 BOULEVARD COLONEL AMIROUCHE - ALGER BP DIRECTION GÉNÉRALE: 42 RUE DES FRÈRES BOUADOU · 16005 BIR MOURAD RAÏS, ALGER · ALGERIE'
        }
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
  navigateTo(route: string, subMenuId: string, subMenuIdNav: string) {
    if (route == "/finance-islamique/nos-comptes" && subMenuIdNav) {
      console.log("je suis dedans", subMenuIdNav)
      this.router.navigate([route]).then(() => {
        if (subMenuIdNav) {
          setTimeout(() => {
            const element = document.getElementById(subMenuIdNav);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 0);
        }
      });

    } else {
      this.subMenuSelected.emit(subMenuId); // Émet l'événement avec l'id du sous-menu
      this.router.navigate([route]);
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
      }, 0);


    }
  }

}

