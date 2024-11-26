import { Component } from '@angular/core';
import { New } from './new';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  public News: Array<New> = [
    {
      id: '1',
      image: '../../../assets/images/Bea/newActualite/financementMourabaha.jpg',
      title: "Financement Mourabaha de biens à la consommation Signature d’une convention entre La Banque Extérieure d’Algérie et Algerien Cyber Market (ACM)",
      date: new Date('2024-04-21'),
      url: "",
    },
    {
      id: '2',
      image: '../../../assets/images/Bea/actualités/nouveauDirecteurGénéral.jpg',
      title: "LAHOUARI RAHALI nouveau Directeur Général de la Banque Extérieure d'Algérie",
      date: new Date('2024-04-03'),
      url: "",
    },
    {
      id: '3',
      image: '../../../assets/images/Bea/actualités/AdhésionSWIFT.jpg',
      title: "Adhésion de la BEA au SWIFT GPI.",
      date: new Date('2023-12-24'),
      url: "",
    },
    {
      id: '4',
      image: '../../../assets/images/Bea/actualités/convention(BEA)(AAPI).jpg',
      title: "Convention de partenariat entre la Banque Extérieure d'Algérie (BEA) , l'Agence Algérienne de Promotion de l'Investissement (AAPI), et Cash Assurances, en date du 12 novembre 2023. ",
      date: new Date('2023-11-12'),
      url: "",
    },
    {
      id: '5',
      image: '../../../assets/images/Bea/actualités/adhésionBUNA.jpg',
      title: "Adhésion de la Banque Extérieure d’Algérie au Système de Paiement Interarabe BUNA .",
      date: new Date('2022-05-31'),
      url: "",
    },
    {
      id: '6',
      image: '../../../assets/images/Bea/actualités/participationFoireInternationale2023.jpg',
      title: "Participation de la BEA à la foire internationale d'Alger 2023 Du 20 au 25 Juin 2023",
      date: new Date('2023-06-20'),
      url: "",
    },
    {
      id: '7',
      image: '../../../assets/images/Bea/actualités/accordPrêtKOTAMA.jpg',
      title: "Accord de prêt à long terme pour le compte de KOTAMA AGRI FOOD en date du 07/06/2023",
      date: new Date('2023-06-07'),
      url: "",
    },
    {
      id: '8',
      image: '../../../assets/images/Bea/actualités/convention(ABEF)(ADE).jpg',
      title: "Convention de partenariat entre l'Association des Banques et des Etablissements Financiers (ABEF) et l'Algérienne Des Eaux (ADE) en date du 23/05/2023",
      date: new Date('2023-05-23'),
      url: "",
    },
    {
      id: '9',
      image: '../../../assets/images/Bea/actualités/interviewEchouroukNews.jpg',
      title: "Interview accordée à Echourouk News par le DG en date du 22/05/2023 ",
      date: new Date('2023-05-22'),
      url: "",
    },
    {
      id: '10',
      image: '../../../assets/images/Bea/actualités/cérémonies.jpg',
      title: "Retour en images sur les cérémonies du 13/05/2023",
      date: new Date('2023-05-13'),
      url: "",
    },
    {
      id: '11',
      image: '../../../assets/images/Bea/actualités/montantDépôtsGuichets.jpg',
      title: "La BEA révèle le montant de dépôts aux guichets de la finance islamique.",
      date: new Date('2022-08-11'),
      url: "",
    },
    {
      id: '12',
      image: '../../../assets/images/Bea/actualités/InaugurationDG M.LATRECHE LAZHAR.jpg',
      title: "Inauguration du Directeur Général M.LATRECHE LAZHAR en compagnie du top management de la Banque, de l’agence Ain Defla.",
      date: new Date('2022-04-17'),
      url: "",
    },
    {
      id: '13',
      image: '../../../assets/images/Bea/actualités/conventionBEAetNAFTAL.jpg',
      title: "Signature d’une convention entre la Banque Extérieure d’Algérie et NAFTAL, portant sur la mise à disposition de plus de 2.300 TPE sur le réseau Naftal.",
      date: new Date('2022-04-14'),
      url: "",
    },
  ];
  
   
  pagedNews: Array<New> = [];
  pageSize: number = 6;
  currentPage: number = 1;
  totalPages: number = 0;

  startDate: string = '';
  endDate: string = '';
  dateError: boolean = false;
  dateErrorMessage: string = '';

  ngOnInit(): void {
    this.filterNews();
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.updatePagedNews();
  }

  filterNews() {
    this.dateError = false;
    this.dateErrorMessage = '';

    let filteredNews = this.News;

    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      if (start > end) {
        this.dateError = true;
        this.dateErrorMessage = 'La date de début ne peut pas être supérieure à la date de fin.';
        return;
      }
    }

    if (this.startDate) {
      const start = new Date(this.startDate);
      filteredNews = filteredNews.filter(news => new Date(news.date!) >= start);
    }

    if (this.endDate) {
      const end = new Date(this.endDate);
      filteredNews = filteredNews.filter(news => new Date(news.date!) <= end);
    }

    this.totalPages = Math.ceil(filteredNews.length / this.pageSize);
    this.currentPage = 1; // Reset to first page on filter
    this.updatePagedNews(filteredNews);
  }

  updatePagedNews(filteredNews?: Array<New>) {
    const newsToPage = filteredNews || this.News;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedNews = newsToPage.slice(startIndex, startIndex + this.pageSize);
  }

  previousPage() {
    this.setPage(this.currentPage - 1);
  }

  nextPage() {
    this.setPage(this.currentPage + 1);
  }

  onFilter() {
    this.filterNews();
  }

  onDateInputFocus(event: FocusEvent) {
    event.preventDefault();
  }
}