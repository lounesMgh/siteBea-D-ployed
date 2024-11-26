import { Component, HostListener } from '@angular/core';
import { Carte } from './carte';
import { LanguageService } from 'src/app/services/language/language.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-solutions-monetique',
  templateUrl: './solutions-monetique.component.html',
  styleUrls: ['./solutions-monetique.component.css']
})
export class SolutionsMonetiqueComponent {
   url: string='/EbankingDetails';
  public cartesCib: Array<Carte> = [
    
    {
      id: '1',
      title: 'Carte CIB classique',
      designation: "la carte bancaire qui vous correspond et vous simplifie la vie au quotidien.",
      image: '../../../../assets/images/Bea/carteBancaire/cartesCib/Carte CIB Classique.png',
      listItems:[
        "Délivrance de carte (validité deux (02) années) gratuitement.",
        "Plafonds personnalisés.",
        "Une tarification forfaitaire avantageuse.",
        "Règlement des factures.",
        "Paiements en ligne."
      ]
     
    },
    
    {
      id: '2',
      title: 'Carte CIB gold',
      designation: 'Délivrance de carte (validité deux (02) années) gratuitement.',
      image: '../../../../assets/images/Bea/carteBancaire/cartesCib/Carte CIB Gold.png',
      listItems:[
        "Plafonds personnalisés.",
        "Une tarification forfaitaire avantageuse.",
        "Règlement des factures.",
        "Paiements en ligne."
      ]
    },
   
  ];
  public cartesMaster: Array<Carte> = [
    
    {
      id: '1',
      title: 'Cartes classique',
      designation: "la carte bancaire qui vous correspond et vous simplifie la vie au quotidien.",
      image: '../../../../assets/images/Bea/carteBancaire/cartesMaster/Cartes Classique.jpg',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Frais de gestion : gratuit.",
        "Opposition: gratuit.",
        "Plafond mensuel de 2 000 €.",
      ]
     
    },
    
    {
      id: '2',
      title: 'Cartes prépayée',
      designation: 'Payez en ligne et partout dans le monde en controlant votre Budget.',
      image: '../../../../assets/images/Bea/carteBancaire/cartesMaster/Cartes Prépayée.png',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Frais de gestion : gratuit.",
        "Opposition: gratuit.",
        "Plafond mensuel est de Min : 200 € et Max : 2.000 €."
      ]
    },
    {
      id: '3',
      title: 'Cartes platinum',
      designation: 'Payez en ligne et partout dans le monde en controlant votre Budget.',
      image: '../../../../assets/images/Bea/carteBancaire/cartesMaster/Cartes Platinum.jpg',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Frais de gestion : gratuit.",
        "Opposition: gratuit.",
        "Plafond mensuel est de 5.000 €."
      ]
    },
    {
      id: '4',
      title: 'Cartes business',
      designation: 'Une carte pour les petites et moyennes entreprises.',
      image: '../../../../assets/images/Bea/carteBancaire/cartesMaster/Cartes Business.jpg',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Frais de gestion : gratuit.",
        "Opposition: gratuit.",
        "Plafond mensuel est de 7.000 €.",
        "Dépenses débitées sur le compte de l'entreprise",
        "Envoi automatique du relevé des dépenses"
      ]
    },
    {
      id: '5',
      title: 'Cartes world elite ',
      titleNext:"(Exclusif Banque Extérieure d'Algérie)",
      designation: "Une carte pour les petites et moyennes entreprises..",
      image: '../../../../assets/images/Bea/carteBancaire/cartesMaster/Cartes world Elite.png',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Frais de gestion : gratuit.",
        "Opposition: gratuit.",
        "Plafond mensuel est de 10.000 €.",
        "Accès illimité au salon VIP",
        "Assurance voyage complète"
      ]
    },
    {
      id: '6',
      title: 'Cartes world business',
      titleNext:"(Exclusif Banque Extérieure d'Algérie)",
      designation: "Vivez des expériences uniques à travers le monde.",
      image: '../../../../assets/images/Bea/carteBancaire/cartesMaster/Cartes World Business.jpg',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Frais de gestion : gratuit.",
        "Opposition: gratuit.",
        "Plafond mensuel est de 10.000 €.",
        "Assurance voyage complète.",
        "Accès illimité au salon VIP."
      ]
    }
   
  ];
  public cartesAmerican: Array<Carte> = [
    
    {
      id: '1',
      title: 'Cartes green',
      titleNext:"(Exclusif Banque Extérieure d'Algérie)",
      designation: "Prenez les commandes de votre vie.",
      image: '../../../../assets/images/Bea/carteBancaire/cartesAmerican/Cartes Green.jpg',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Service clientèle disponible 24/7.",
        "Programme Membership Reward® programme.",
        "Garantie protection fraude pour les achats en ligne.",
        "Assurances accidents de voyages allant jusqu’à US$ 100,000."
      ]
     
    },
    
    {
      id: '2',
      title: 'Cartes gold',
      titleNext:"(Exclusif Banque Extérieure d'Algérie)",
      designation: "Une vie de privilèges vous attend.",
      image: '../../../../assets/images/Bea/carteBancaire/cartesAmerican/Cartes Gold.jpg',
      listItems:[
        "Paiements dans le monde entier et en ligne.",
        "Service clientèle disponible 24/7.",
        "Accès gratuit aux salons des aéroports du moyen orient.",
        "Garantie protection fraude pour les achats en ligne.",
        "Assurances accidents de voyages allant jusqu’à US$ 100,000. "
      ]
    },
    {
      id: '3',
      title: 'Cartes platinum',
      titleNext:"(Exclusif Banque Extérieure d'Algérie)",
      designation: "Ce n'est pas une carte. c'est un art de vivre..",
      image: '../../../../assets/images/Bea/carteBancaire/cartesAmerican/carte american Cartes Platinum.jpg',
      listItems:[
        "Paiements de proximité et en ligne dans le monde entier.",
        "Service clientèle platinum disponible 24/7.",
        "Accès gratuit aux salons des aéroports de votre région.",
        "Assurances accidents de voyages allant jusqu’à US$ 1 million."
      ]
    }
  ];
  constructor(public languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller) {

  }
  navigateTo(url: string): void {
    if (url) {
      this.router.navigate([url]);
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, 0]); 
      }, 0);
    }
  }
}