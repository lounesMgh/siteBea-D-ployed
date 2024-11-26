import { Component } from '@angular/core';
import { MoyenPaimentInternational } from './moyenPaiementInter';
interface Row {
  id?: number;
  isOpen?: boolean;
  natureOperations?: string;
  commissions?: string;
  dateValeur?: string;
  
}

@Component({
  selector: 'app-commerce-international',
  templateUrl: './commerce-international.component.html',
  styleUrls: ['./commerce-international.component.css']
})
export class CommerceInternationalComponent {

  public MoyenPaimentInternationals: Array<MoyenPaimentInternational> = [
    {
      id: '1',
      image: '../../../../assets/images/Bea/MoyenDePayementsInternational/creditDocument.jpg',
      title: 'Le crédit documentaire',
      designation: "Optimisez l'engagement et la sécurité de vos transactions avec vos partenaires étrangers.",
    },
    {
      id: '2',
      image: '../../../../assets/images/Bea/MoyenDePayementsInternational/RemiseDocumentaire.jpg',
      title: 'La remise documentaire',
      designation: "Sécuriser vos transaction avec vos clients étrangers.",
    },
    {
      id: '3',
      image: '../../../../assets/images/Bea/MoyenDePayementsInternational/transfertLibre.jpg',
      title: 'Transfert libre et encaissement de chéques',
      designation: "Une sécurité de transfért de fonds optimale grâce au réseau international SWIFT.",
    },
    {
      id: '4',
      image: '../../../../assets/images/Bea/MoyenDePayementsInternational/rapatriementDevises.jpg',
      title: 'Un rapatriement de vos devises',
      designation: "Facilitez votre activité d'import-export en optant pour vos virements internationaux.",
    }

  ];
  rows: Row[] = [
    {
      id: 1,
      isOpen: true,
      natureOperations: '- Domiciliation à l’import',
      commissions: '3.000 DA',
      dateValeur: "Date d'ouverture",
    }
  ];
  rows1: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows2: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows3: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows4: Row[] = [
    {
      id: 1,
      isOpen: true,
      natureOperations: '(Frais à la charge du bénéficiaire)',
    }
  ];
  rows5: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows6: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows7: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows8: Row[] = [
    {
      id: 1,
      isOpen: true,
      natureOperations: '-Avis de sort/ Retour Chèque impayé',
      commissions: '1.500 DA par appoint',
    }
  ];
  rows9: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows10: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows11: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  rows12: Row[] = [
    {
      id: 1,
      isOpen: true,
    }
  ];
  toggleRow(index: number) {
    this.rows[index].isOpen = !this.rows[index].isOpen; // Toggle the clicked row
  }
  toggleRow1(index: number) {
    this.rows1[index].isOpen = !this.rows1[index].isOpen; // Toggle the clicked row
  }
  toggleRow2(index: number) {
    this.rows2[index].isOpen = !this.rows2[index].isOpen; // Toggle the clicked row
  }
  toggleRow3(index: number) {
    this.rows3[index].isOpen = !this.rows3[index].isOpen; // Toggle the clicked row
  }
  toggleRow4(index: number) {
    this.rows4[index].isOpen = !this.rows4[index].isOpen; // Toggle the clicked row
  }
  toggleRow5(index: number) {
    this.rows5[index].isOpen = !this.rows5[index].isOpen; // Toggle the clicked row
  }
  toggleRow6(index: number) {
    this.rows6[index].isOpen = !this.rows6[index].isOpen; // Toggle the clicked row
  }
  toggleRow7(index: number) {
    this.rows7[index].isOpen = !this.rows7[index].isOpen; // Toggle the clicked row
  }
  toggleRow8(index: number) {
    this.rows8[index].isOpen = !this.rows8[index].isOpen; // Toggle the clicked row
  }
  toggleRow9(index: number) {
    this.rows9[index].isOpen = !this.rows9[index].isOpen; // Toggle the clicked row
  }
  toggleRow10(index: number) {
    this.rows10[index].isOpen = !this.rows10[index].isOpen; // Toggle the clicked row
  }
  toggleRow11(index: number) {
    this.rows11[index].isOpen = !this.rows11[index].isOpen; // Toggle the clicked row
  }
  toggleRow12(index: number) {
    this.rows12[index].isOpen = !this.rows12[index].isOpen; // Toggle the clicked row
  }
}