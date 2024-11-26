import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Accueil } from './accueil';
import { LanguageService } from 'src/app/services/language/language.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {

  constructor(public languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller) {

  }


  public serviceProperties: Array<Accueil> = [
    {
      id: '1',
      icon: 'fa-solid fa-money-check-dollar text-primary custom-size fa-2x',
      title: 'Ouvrir un compte bancaire',
      designation: 'Découvrez nos conditions pour ouvrir un compte bancaire.',
      url: '/finance-standard/services/conditionOuvertureCompte',
    },
    {
      id: '2',
      icon: 'fa-solid fa-hand-holding-dollar text-primary custom-size fa-2x  ',
      title: 'Epargner',
      designation: 'Des solutions de placement adaptées à vos besoins.',
      url: '/finance-standard/services/epargner',
    },
    {
      id: '3',
      icon: 'fa-solid fa-euro-sign text-primary custom-size fa-2x',
      title: 'Cours des principales monnaies',
      designation: 'Cotation commerciale, Cotation billets de banque et Cotation chèques de voyage.',
      url: '/finance-standard/services/CoursPrincipalesMonnaies',
    },
    {
      id: '4',
      icon: 'fa-solid fa-money-bill-trend-up text-primary custom-size fa-2x',
      title: 'Simulateur de crédit en ligne',
      designation: 'Trouvez le financement parfait pour vous.',
      url: '/finance-standard/services/simulateurDeCreditEnLigne',
    },
    {
      id: '5',
      icon: 'fa-solid fa-bullhorn text-primary custom-size fa-2x',
      title: "Appels d'offres",
      designation: "Nos appels d'offres.",
      url: '/finance-standard/services/appelsOffres',
    },
    {
      id: '6',
      icon: 'fa-solid fa-sack-dollar text-primary custom-size fa-2x',
      title: 'Nos tarif bancaires',
      designation: ' Pour vous simplifier la vie au quotidien.',
      url: '/finance-standard/services/TarifBancaires',
    },
  ];
  navigateTo(url: string): void {
    if (url) {
      this.router.navigate([url]);
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
      }, 0);
    }
  }
  public solutionsProperties: Array<Accueil> = [

    {
      id: '1',
      title: 'Epargne placements',
      designation: "Placer une somme d'argent sur un horizon de temps limité avec un rendement garanti sur toute la durée du placement.",
      image: 'assets/images/Bea/close-up-coins-bottle.jpg',
      url: '/finance-standard/solutionsBancaires/EpargnePlacement'
    },

    {
      id: '2',
      title: 'Crédits aux entreprises',
      designation: 'Nous offrons des solutions de financement pour optimiser votre trésorerie et soutenir vos projets.',
      image: 'assets/images/Bea/bar-graph-with-silhouettes-co-workers-background.jpg',
      url: '/finance-standard/solutionsBancaires/CreditEntreprise'
    },

    {
      id: '3',
      title: 'Crédit immobilier',
      designation: 'Pour un crédit immobilier chez notre banque.',
      image: 'assets/images/Bea/protect-your-house.jpg',
      url: '/finance-standard/solutionsBancaires/CreditImmobilier'
    },
    {
      id: '4',
      title: 'Nos cartes bancaires',
      designation: 'Une palette de cartes monétiques et divers solutions sont mises à votre disposition.',
      image: 'assets/images/Bea/carteblue.jpg',
      url: '/finance-standard/solutionsBancaires/CartesBancaires'
    }
  ];

  isDragging = false;
  startX: number = 0;
  startScrollLeft: number = 0;
  cardPerView: number = 0;
  canScrollPrev: boolean = false;
  canScrollNext: boolean = true;

  ngAfterViewInit() {
    const carousel = document.querySelector('.carousel1') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    this.cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    this.updateScrollButtons(carousel);
    carousel.addEventListener('scroll', () => this.updateScrollButtons(carousel));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const carousel = document.querySelector('.carousel1') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    this.cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    this.updateScrollButtons(carousel);
  }

  scrollLeft() {
    const carousel = document.querySelector('.carousel1') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    carousel.scrollLeft -= firstCardWidth;
    this.updateScrollButtons(carousel);
  }

  scrollRight() {
    const carousel = document.querySelector('.carousel1') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    carousel.scrollLeft += firstCardWidth;
    this.updateScrollButtons(carousel);
  }

  canScrollLeft(): boolean {
    const carousel = document.querySelector('.carousel1') as HTMLElement;
    return carousel.scrollLeft > 0;
  }

  canScrollRight(): boolean {
    const carousel = document.querySelector('.carousel1') as HTMLElement;
    return carousel.scrollLeft < (carousel.scrollWidth - carousel.offsetWidth);
  }

  updateScrollButtons(carousel: HTMLElement) {
    this.canScrollPrev = this.canScrollLeft();
    this.canScrollNext = this.canScrollRight();
  }

  dragStart(event: MouseEvent) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    this.isDragging = true;
    carousel.classList.add('dragging');
    this.startX = event.pageX;
    this.startScrollLeft = carousel.scrollLeft;
  }

  dragging(event: MouseEvent) {
    if (!this.isDragging) return;
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.scrollLeft = this.startScrollLeft - (event.pageX - this.startX);
    this.updateScrollButtons(carousel);
  }

  dragStop() {
    const carousel = document.querySelector('.carousel1') as HTMLElement;
    this.isDragging = false;
    carousel.classList.remove('dragging');
    this.updateScrollButtons(carousel);
  }

  infiniteScroll(carousel: HTMLElement) {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add('no-transition');
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove('no-transition');
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add('no-transition');
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove('no-transition');
    }

    this.updateScrollButtons(carousel);
  }
}