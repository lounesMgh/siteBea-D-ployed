import { Component } from '@angular/core';
import { CreditImmobiliers } from './credit-immobiliers';
import { LanguageService } from 'src/app/services/language/language.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-financements-particuliers',
  templateUrl: './financements-particuliers.component.html',
  styleUrls: ['./financements-particuliers.component.css']
})
export class FinancementsParticuliersComponent {
  url: string='/finance-standard/financementParticuliers/simulateurCredit'
  constructor(public languageService: LanguageService,
    private router: Router,
    private viewportScroller: ViewportScroller) {

  }
  creditImmobiliers: CreditImmobiliers[] = [
    {
      id: '1',
      title: 'Construction zone rurale',
      designation: "Vous avez un terrain dans une zone rurale, pour la 'construction' de votre terrain bénéficier d'un taux préférentiel.",
      image: '../../../../assets/images/Bea/ConstructionZoneRurale.jpg',  
    },
    {
      id: '2',
      title: 'Extension de votre logement',
      designation: "Avec le crédit 'extension' vous pouvez effectuer des travaux d'agrandissement de votre maison",
      image: '../../../../assets/images/Bea/ExtensionDeVotreLogement.jpg',
    },{
      id: '3',
      title: 'Aménagement de votre logement',
      designation: "Avec le crédit 'aménagement' vous pouvez entreprendre des travaux de rénovation, d’aménagement ou d’apporter des retouches à votre maison ou appartement.",
      image: '../../../../assets/images/Bea/AménagementLogement.jpg',    
    },
    {
      id: '4',
      title: 'Constrution de votre logement',
      designation: "Pour la 'construction' de votre bien, nous vous proposons différentes solutions attractives pour vous aider à financer votre projet de construction.",
      image: '../../../../assets/images/Bea/ConstrutionDeVotreLogement.jpg',    
    },{
      id: '5',
      title: "Acquisition de logement 'LPP'",
      designation: "vous avez bénéficié d'un LPP et vous cherchez un financement, nous vous proposons des solutions de crédits clairs et accéssibles.",
      image: '../../../../assets/images/Bea/AcquisitionDeLogementLPP.jpg',   
    },{
      id: '6',
      title: 'Acquisition de logement sur plan auprés de promoteurs immobilier',
      designation: "vous avez trouvé un logement dans une promotion immobilière et vous cherchez un financement, nous vous proposons des solutions de crédits clairs et accéssibles.",
      image: '../../../../assets/images/Bea/AcquisitionDeLogementPlan.jpg',  
    },{
      id: '7',
      title: "Acquisition de logements auprés d'un particuliers",
      designation: "Vous avez trouvez un logement auprés d'un particulier nous vous proposons des solutions avec beaucoup d'avantages: simplicité, transparence, accessibilité.",
      image: '../../../../assets/images/Bea/Acquisition de logements auprés particuliers.jpg',
    },
  ];
  navigateTo(url: string): void {
    if (url) {
      this.router.navigate([url]);
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, 0]); 
      }, 0);
    }
  }
}
