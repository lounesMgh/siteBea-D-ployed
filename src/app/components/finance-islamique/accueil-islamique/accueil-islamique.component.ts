import { AfterViewInit, Component, HostListener } from '@angular/core';

import { Accueil } from '../../finance-standard/accueil/accueil';
import { LanguageService } from 'src/app/services/language/language.service';
import { BeaService } from 'src/app/services/bea/bea.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-accueil-islamique',
  templateUrl: './accueil-islamique.component.html',
  styleUrls: ['./accueil-islamique.component.css']
})
export class AccueilIslamiqueComponent implements AfterViewInit {
  constructor(public languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private beaService: BeaService) {

  }
  public compteBancaires: Array<Accueil> = [

    {
      id: '1',
      title: 'Compte de dépôt islamique',
      designation: "Le compte de dépôt islamique vous permet de gérer votre argent.",
      image: 'assets/images/Bea/compteDépôtIslamique.jpg',
    },

    {
      id: '2',
      title: 'Compte courant islamique',
      designation: 'Le compte courant islamique vous permet de  suivre vos transactions.',
      image: 'assets/images/Bea/compteCourant.jpg',
    },

    {
      id: '3',
      title: 'Compte épargne islamique',
      designation: 'Le compte épargne islamique vous permet de fructifiez vos épargnes en respectant les principes de la charia.',
      image: 'assets/images/Bea/compteEpargneIslamique.jpg',
    },
    {
      id: '4',
      title: 'Compte de dépot CINR',
      designation: "Le compte d'investissement islamique non restreint à terme pour particuliers et entreprises (CINR)",
      image: 'assets/images/Bea/compteDepotCINR.jpg',
    }
  ];
  public MOURABAHA_TABS: Accueil[] = [
    {
      id: 'mourabaha-tab-1',
      title: 'Mourabaha automobile',
      designation: 'Vous souhaitez aquérir une voiture ? Vous cherchez des solutions de financement adéquates ? La BEA, vous aide à les réaliser.',
      image: 'assets/images/Bea/MourabahaAutomobile.jpg',
      url: '#mourabaha-tab-1',
      listItems: [
        "Des financements qui peuvent aller jusqu’à 90% du coût global du véhicule",
        "Le montant du financement est plafonné à 4.000.000 DZD tout en respectant la capacité de remboursement du client, conformément à la réglementation en vigueur",
        "La durée de financement allant de 12 à 60 mois",
        "Frais de dossier gratuit"
      ]
    },
    {
      id: 'mourabaha-tab-2',
      title: 'Mourabaha biens à la consommation',
      designation: 'Vous souhaitez acheter des équipements domestiques pour votre maison? Vous cherchez des solutions de financement adéquates? La BEA, vous aide à les concrétiser.',
      image: 'assets/images/Bea/MourabahaConsomation.jpg',
      url: '#mourabaha-tab-2',
      listItems: [
        "Des financements qui peuvent aller jusqu’à 90% du coût global des équipements",
        "Le montant du financement est plafonné à 1.500.000 DZD tout en respectant la capacité de remboursement du client, conformément à la réglementation en vigueur",
        "La durée de financement allant de 12 à 48 mois",
        "Frais de dossier gratuit"
      ]
    },
    {
      id: 'mourabaha-tab-3',
      title: 'Mourabaha immobilière',
      designation: 'Nous mettons entre vos mains les meilleurs formules financement immobilier qui vous aident à devenir propriétaire de la maison de vos rêves.',
      image: 'assets/images/Bea/house-money.jpg',
      url: '#mourabaha-tab-3',
      listItems: [
        "Des financements qui peuvent aller jusqu’à 90% du coût global de l'immobilier",
        "Le montant du financement est plafonné à 4.000.000 DZD tout en respectant la capacité de remboursement du client, conformément à la réglementation en vigueur",
        "La durée de financement allant de 12 à 60 mois",
        "Frais de dossier gratuit"
      ]
    }
  ];

  isDragging = false;
  startX: number = 0;
  startScrollLeft: number = 0;
  cardPerView: number = 0;
  canScrollPrev: boolean = false;
  canScrollNext: boolean = true;
  navigateTo(url: string, anchorId?: string): void {
    if (url) {
      this.router.navigate([url]).then(() => {
        if (anchorId) {
          setTimeout(() => {
            const element = document.getElementById(anchorId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 0);
        }
      });
    }
  }
  
  ngAfterViewInit() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    this.cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    this.updateScrollButtons(carousel);
    carousel.addEventListener('scroll', () => this.updateScrollButtons(carousel));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    this.cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    this.updateScrollButtons(carousel);
  }

  scrollLeft() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    carousel.scrollLeft -= firstCardWidth;
    this.updateScrollButtons(carousel);
  }

  scrollRight() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const firstCardWidth = carousel.querySelector('.card')?.clientWidth || 0;
    carousel.scrollLeft += firstCardWidth;
    this.updateScrollButtons(carousel);
  }

  canScrollLeft(): boolean {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    return carousel.scrollLeft > 0;
  }

  canScrollRight(): boolean {
    const carousel = document.querySelector('.carousel') as HTMLElement;
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
    const carousel = document.querySelector('.carousel') as HTMLElement;
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
  openPresentation(): void {
    this.beaService.openNewWindowExtern('https://www.youtube.com/embed/Gq_J7IK-NBM');
  }
}