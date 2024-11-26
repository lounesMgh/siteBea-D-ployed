import {  Component } from '@angular/core';

import { contact } from './contact';
@Component({
  selector: 'app-nos-contact-islamique',
  templateUrl: './nos-contact-islamique.component.html',
  styleUrls: ['./nos-contact-islamique.component.css']
})
export class NosContactIslamiqueComponent{ 

  contacts: contact[] = [
    {
      code: '00004',
      agence: 'CHERAGA VILLE',
      adress: '11, Lot. Ben Haddadi Said CHERAGA ALGER',
      phone: '023 35 82 21 | 023 35 82 22 | 023 35 82 20',
      fax: '023 35 82 19 '
    },
    {
      code: '00005',
      agence: 'Hydra',
      adress: 'Djenane el Malik Hydra Alger',
      phone: '021 54 60 06 | 021 54 60 07',
      fax: '021 54 79 21 | 021 54 80 00'
    },
    {
      code: '00006',
      agence: 'ROUIBA LES CASTORS',
      adress: '2, Bis Hassiba Ben Bouali ROUIBA',
      phone: '023 85 51 44 | 023 85 55 57',
      fax: '023 85 55 56'
    },
    {
      code: '00008',
      agence: 'CHERAGA SITE NAFTAL',
      adress: 'Site Naftal Route Des Dunes CHERAGA',
      phone: '021 38 13 05',
      fax: '021 38 16 01'
    },
    {
      code: '00010',
      agence: 'GUEVARA',
      adress: '06, Bd Che Guévara ALGER',
      phone: '021 43 93 77 à 80',
      fax: '021 43 96 53'
    },
    {
      code: '00012',
      agence: 'AMIROUCHE',
      adress: '11, Bd Colonel Amirouche Alger',
      phone: '021 64 34 94 | 021 64 45 96 | 021 63 52 46',
      fax: '021 63 42 66  | 021 63 70 98'
    },
    {
      code: '00013',
      agence: 'KHEMIS MILIANA',
      adress: 'Rue Djelti Mustapha KHEMIS MILIANA',
      phone: '027 56 15 06 | 027 56 12 32',
      fax: '027 56 15 07 | 027 56 12 34 '
    },
    {
      code: '00015',
      agence: "BEN M'HIDI",
      adress: "49 , Rue Larbi Ben M'hidi ALGER",
      phone: '021 73 79 73 | 021 73 74 44',
      fax: '021 73 91 01 '
    },
    {
      code: '00016 ',
      agence: 'PALAIS des EXPOSITIONS',
      adress: 'Pins Maritimes Bp 49 ALGER',
      phone: '023 79 54 78 | 023 79 54 79 | 023 79 54 80',
      fax: '023 79 54 81'
    },
    {
      code: '00020',
      agence: 'Belcourt',
      adress: '118, Rue Mohamed Belouizdad Belcourt ALGER',
      phone: '023 51 38 30',
      fax: '023 51 46 00 '
    },
    {
      code: '00022',
      agence: 'HUSSEIN DEY',
      adress: '33, rue tripolie Hussein ,dey alger',
      phone: '023 77 16 66 | 023 77 17 06 | 023 77 15 45 | 023 77 17 24 |023 77 17 96',
      fax: '023 77 17 35'
    },
    {
      code: '00024',
      agence: 'BLIDA',
      adress: '10 Bd Layachi Abdellah BLIDA',
      phone: '025 21 44 19',
      fax: '025 21 40 30 '
    },
    {
      code: '00026',
      agence: 'MEDEA',
      adress: 'Rue Ahmed Farah MEDEA',
      phone: '025 80 41 01 | 025 80 40 99',
      fax: '025 80 40 96 | 025 80 41 00'
    },
    {
      code: '00028',
      agence: 'GHARDAIA',
      adress: 'Avenue du 1er Novembre 1954 Bp ,233 GHARDAIA',
      phone: '029 23 33 25 | 029 23 33 26 | 029 23 33 28',
      fax: '029 23 33 24 | 029 23 33 27'
    },
    {
      code: '00029',
      agence: 'LAGHOUAT',
      adress: 'Cité Bou sahnoun El Maamoura LAGHOUAT',
      phone: '029 13 19 14 | 029 13 18 96',
      fax: '029 13 19 08 | 029 13 19 65'
    },
    {
      code: '00030',
      agence: 'EL HARRACH',
      adress: '14, Rue Aoun Ahmed El Harrach',
      phone: '023 62 11 28',
      fax: '023 62 19 82'
    },
    {
      code: '00031',
      agence: "DJELFA",
      adress: "Cité Benrebbih DJELFA",
      phone: '027 93 87 45 | 027 93 87 46 | 027 93 87 47',
      fax: '027 93 87 52'
    },
    {
      code: '00032 ',
      agence: 'OUARGLA',
      adress: 'Place Sedrata OUARGLA',
      phone: '029 70 35 67 | 029 70 35 68',
      fax: '029 70 34 82'
    },
    {
      code: '00033',
      agence: 'HASSI MESSAOUD ENTREPRISES',
      adress: 'Quartier résidentiel Bp 108 Hassi Messaoud Ouargla',
      phone: '029 74 52 74',
      fax: '029 74 52 69 '
    },
    {
      code: '00034',
      agence: 'TIZI OUZOU 1',
      adress: '66 avenue Houari Boumediene Tizi Ouzou ',
      phone: '026 12 38 05 | 026 10 75 80 | 026 12 39 37 | 026 12 88 57',
      fax: '026 12 26 49 | 026 12 95 36'
    },
    {
      code: '00036',
      agence: 'SETIF CENTRE',
      adress: '22,Avenue 08 Mai 1945 Sétif',
      phone: '',
      fax: ''
    },
    {
      code: '00037',
      agence: 'BOUIRA',
      adress: '11, Rue Abane Ramdane-BOUIRA',
      phone: '026 74 83 46 | 026 74 83 48 | 026 74 83 49 ',
      fax: '026 74 83 45 | 026 74 83 47'
    },
    {
      code: '00038',
      agence: 'HASSIBA BENBOUALI',
      adress: ' 	88, Bd Hassiba Benbouali ALGER',
      phone: '021 66 20 90 ',
      fax: '021 66 20 39'
    },
    {
      code: '00039',
      agence: 'EL KHROUB',
      adress: ' 	Bd Nabti Rachid, cité 1600 logts El-Khroub Constantine',
      phone: '031 76 83 29 | 031 76 83 24',
      fax: '031 76 83 23'
    },
    {
      code: '00040',
      agence: "BEJAIA SIL'HAOUES",
      adress: '11, Rue si El Houas- BEJAIA',
      phone: '034 17 43 55 | 034 17 43 62',
      fax: '034 17 40 24 | 034 17 43 88'
    },
    {
      code: '00041',
      agence: 'BEJAIA IHADDADENE',
      adress: 'Bd Krim Belkacem (Promotion SONACOB) BEJAIA',
      phone: '034 12 01 27 | 034 12 01 47 ',
      fax: '034 12 01 49'
    },
    {
      code: '00042',
      agence: 'ANNABA REVOLUTION',
      adress: '14, Cours de la Révolution -ANNABA',
      phone: '038 45 94 48 | 038 45 94 35',
      fax: '038 45 92 92'
    },
    {
      code: '00043',
      agence: 'JIJEL IBN KHALDOUN',
      adress: '1, Rue Ibn Khaldoun Jijel',
      phone: '034 47 20 83',
      fax: '034 47 17 73'
    },
    {
      code: '00044',
      agence: 'ANNABA TARIK IBN ZIAD',
      adress: '19, Bd du 1er Novembre 1954 Annaba',
      phone: '038 45 06 32',
      fax: '038 45 06 33'
    },
    {
      code: '00046',
      agence: 'TEBESSA',
      adress: 'Rue Emir Abdelkader TEBESSA',
      phone: '037 58 22 79',
      fax: '037 58 28 74'
    },
    {
      code: '00047',
      agence: "M'SILA",
      adress: "Cité 206 logements -M'SILA ",
      phone: '035 37 07 19 | 035 35 07 20',
      fax: '035 35 07 23 | 035 35 07 25'
    },
    {
      code: '00048',
      agence: 'JIJEL (Centre)',
      adress: 'Route de Constantine JIJEL',
      phone: '034 47 13 40',
      fax: '034 49 89 47'
    },
    {
      code: '00051',
      agence: 'OUM EL BOUAGHI',
      adress: 'Rue du 1er Novembre 50 logements Oum EL Bouaghi',
      phone: '032 54 16 85',
      fax: '032 54 28 08'
    },
    {
      code: '00052',
      agence: 'SKIKDA',
      adress: 'Les Allées du 20 Aout 1955 SKIKDA',
      phone: '038 72 18 44',
      fax: '038 72 18 26'
    },
    {
      code: '00053',
      agence: 'SETIF BEL AIR',
      adress: "Avenue de l'ALN BP315 Bel Air SETIF 	0",
      phone: '036 61 33 96 | 036 61 33 97 | 036 61 33 98 | 036 61 34 02',
      fax: '036 61 33 95'
    },
    {
      code: '00054',
      agence: 'BATNA LA VERDURE',
      adress: 'Bd Abdelsamed Abdeslam la Verdure BATNA',
      phone: '033 80 73 23 | 033 85 39 39',
      fax: '033 80 73 27'
    },
    {
      code: '00055',
      agence: 'GUELMA',
      adress: 'Avenue Ali Chorfi GUELMA',
      phone: '037 15 03 41 | 037 15 03 44',
      fax: '037 15 03 37'
    },
    {
      code: '00056',
      agence: 'BISKRA',
      adress: 'Avenue Ibn Badis et Si El Haoues BISKRA',
      phone: '033 53 72 17 | 033 53 72 45',
      fax: '033 53 72 68'
    },
    {
      code: '00057',
      agence: 'SOUK AHRAS',
      adress: 'Avenue du 1er novembre 1954 Souk Ahras',
      phone: '037 82 47 71',
      fax: '037 82 47 72'
    },
    {
      code: '00060',
      agence: 'ORAN ABDELKADER',
      adress: '3, BD Emir Abdelkader ORAN',
      phone: '041 36 18 11 | 041 36 18 12 | 041 36 18 13 | 041 36 18 17 | 041 36 18 18',
      fax: '041 36 18 14'
    },
    {
      code: '000061',
      agence: 'SAIDA',
      adress: "21, Avenue de l'Indépendance SAIDA",
      phone: '048 41 38 95 | 048 41 30 53',
      fax: '048 41 32 77'
    },
    {
      code: '00062',
      agence: 'ORAN KHEMISTI',
      adress: '05,Square cayla Oran',
      phone: ' 	041 33 60 26 | 041 33 60 27 ',
      fax: '041 33 24 62'
    },
    {
      code: '00064',
      agence: 'TLEMCEN',
      adress: "02,Rue de l'indépendance El mechoir Tlemcen",
      phone: '043 26 26 44 | 043 26 26 51',
      fax: '043 26 26 99'
    },
    {
      code: '00065',
      agence: 'SIDI BEL ABBES',
      adress: '25,Bd Cheikh larbi Tebessi Sidi Bel Abbes ',
      phone: '048 74 31 77 | 048 74 21 74',
      fax: '048 74 21 06 | 048 74 31 78'
    },
    {
      code: '00066',
      agence: 'MOSTAGANEM PARTICULIERS',
      adress: '4, Rue Emir Abdelkader MOSTAGANEM',
      phone: '045 41 38 09 à 14',
      fax: '045 41 38 08'
    },
    {
      code: '00067',
      agence: 'MASCARA',
      adress: 'Rue 1er Novembre Mascara',
      phone: '045 75 29 42',
      fax: '045 75 29 58'
    },
    {
      code: '00068',
      agence: 'CHLEF',
      adress: '17,Boulevard Colonel Bounaama Chlef',
      phone: '027 77 10 43 | 027 77 10 38',
      fax: '027 77 15 70'
    },
    {
      code: '00069',
      agence: 'TIARET',
      adress: 'Boulevard Ibn Badis n°2 Tiaret',
      phone: '046 20 56 35 | 046 20 56 42',
      fax: '046 20 56 38'
    },
    {
      code: '00070',
      agence: 'ARZEW EL MARSA',
      adress: '11, Rue Mohamed Fertas ARZEW Oran',
      phone: '041 79 11 76 à 79',
      fax: '041 79 11 81'
    },
    {
      code: '00071',
      agence: 'BECHAR',
      adress: '37, Avenue Colonel Lotfi BECHAR',
      phone: '049 22 07 72 | 049 22 07 73',
      fax: '049 22 14 87'
    },
    {
      code: '00072',
      agence: 'AIN TEMOUCHENT',
      adress: '61,Bd du 1er Novembre 54 AIN TEMOUCHENT ',
      phone: '043 78 25 70',
      fax: '043 78 25 68'
    },
    {
      code: '00073',
      agence: 'RELIZANE',
      adress: 'Bd du Barrage Relizane',
      phone: '046 71 53 56 | 046 71 53 60',
      fax: '046 71 53 61'
    },
    {
      code: '00074',
      agence: 'ORAN YOUGOSLAVIE',
      adress: 'Avenue Cheikh Medioni ORAN',
      phone: ' 	041 23 24 91 | 041 23 24 95 | 041 23 26 25 | 041 23 24 62 | 041 23 25 92 | 041 23 25 62',
      fax: '041 23 24 96'
    },
    {
      code: '00075',
      agence: 'BENI SAF',
      adress: '10, Rue de la République BENI SAF',
      phone: '043 74 22 91 | 043 74 22 93',
      fax: '043 74 22 59'
    },
    {
      code: '00078',
      agence: 'ARZEW VILLE',
      adress: '2eme Avenue des Jardins Arzew',
      phone: '041 79 28 44 à 46',
      fax: ' 	041 79 28 43 | 041 79 10 22'
    },
    {
      code: '00080',
      agence: 'GHAZAOUET',
      adress: 'Avenue du 1er Novembre 1954 GHAZAOUET ',
      phone: '043 46 94 05 | 043 46 94 06',
      fax: '043 46 94 07'
    },
    {
      code: '00082',
      agence: 'ROUIBA EL KENZ',
      adress: '15, Rue Colonel Amirouche ROUIBA',
      phone: '023 71 61 44 | 023 71 61 45',
      fax: '023 71 61 49'
    },
    {
      code: '00084',
      agence: 'SIG',
      adress: '37 Rue NAKKAB Miloud SIG',
      phone: '045 64 98 32',
      fax: '045 64 98 76'
    },
    {
      code: '00087',
      agence: 'EL EULMA',
      adress: 'Rue ounis hamlaoui lotissement n°43,el Eulma ,Setif',
      phone: '036 47 50 28 | 036 47 50 30',
      fax: '036 47 50 34 | 036 47 50 40'
    },
    {
      code: '00088',
      agence: 'TOUGGOURT',
      adress: 'Bd Houari Boumediene Bp 96 Touggourt',
      phone: '029 66 13 75 | 029 66 13 77',
      fax: '029 66 13 79'
    },
    {
      code: '00089',
      agence: 'BARAKI',
      adress: '06, BD Belarbi BARAKI',
      phone: '023 91 48 81',
      fax: '023 91 48 83 | 023 91 48 84'
    },
    {
      code: '00090',
      agence: 'DELY IBRAHIM',
      adress: '36, Route Nationale- Dely Ibrahim ALGER',
      phone: '023 31 27 18 | 023 31 27 21 | 023 31 28 17',
      fax: '023 31 27 13'
    },
    {
      code: '00091',
      agence: 'OULED YAICH',
      adress: 'Cité du 1er Mai ,des Martyrs Ouled Yaich Blida ',
      phone: '025 26 22 95 | 025 26 22 96',
      fax: '025 26 22 98'
    },
    {
      code: '00092',
      agence: 'IN AMENAS (ILLIZI)',
      adress: 'Place 11 Décembre IN AMENAS',
      phone: '029 45 70 30 | 029 45 70 31 | 029 45 70 32',
      fax: '029 45 70 33'
    },
    {
      code: '00094',
      agence: 'EL OUED',
      adress: 'Cité des 400 Logements El Rimmel EL OUED',
      phone: '032 14 10 60 | 032 14 10 62',
      fax: '032 14 10 64'
    },
    {
      code: '00097',
      agence: 'EL MILIA',
      adress: 'Place des Martyrs El MILIA',
      phone: '034 42 94 80',
      fax: '034 52 11 06'
    },
    {
      code: '00100',
      agence: 'ZERALDA',
      adress: '64,Rue Khiati Ahmed Staouali Alger',
      phone: '023 39 10 54 | 023 39 10 55 ',
      fax: '023 39 10 05 | 023 39 10 00 | 023 39 10 55 '
    },
    {
      code: '000103',
      agence: 'CONSTANTINE SI EL HAOUAS',
      adress: 'Place Colonel SI EL HAOUAS',
      phone: '031 87 46 14 | 031 87 46 43',
      fax: '031 87 46 49'
    },
    {
      code: '00109',
      agence: 'BORDJ BOU ARRERIDJ2',
      adress: '25, Bd de la République- B.B.A',
      phone: '035 73 94 31 | 035 73 94 37 | 035 73 94 47',
      fax: '035 73 94 32'
    },
    {
      code: '000110',
      agence: 'CONSTANTINE EL BEY',
      adress: '(Unité de voisinage)UV 7 Nouvelle ville ali mendjeli constantine',
      phone: '031 77 69 10 | 031 77 69 19 | 031 77 69 27 | 031 77 69 28 | 031 77 69 23 | 031 77 69 36',
      fax: '031 77 69 18'
    },
    {
      code: '00111',
      agence: 'BOUMERDES',
      adress: 'Oued TATREG Bloc "A" Boumerdes',
      phone: '024 79 16 26 | 024 79 16 27 | 024 79 16 28',
      fax: '024 79 16 20'
    },
    {
      code: '00112',
      agence: 'HYDRA LES ROSIERS',
      adress: 'Chemin Boursas Hydra les Rosiers',
      phone: '023 23 07 43 | 023 23 07 44 | 023 23 07 29 ',
      fax: '023 23 07 45'
    },
    {
      code: '00114',
      agence: 'MAGHNIA',
      adress: 'Avenue Mohamed Khemisti , Maghnia wilaya de Tlemcen',
      phone: '043 50 29 63 | 043 50 20 11',
      fax: '043 50 25 96'
    },
    {
      code: '00115',
      agence: 'ORAN ZABANA',
      adress: 'Cité el OUMARIA Rue Ould kablia saliha oran',
      phone: '041 85 81 84 | 041 85 81 85 | 041 83 42 14 | 041 83 40 14 | 041 83 41 14',
      fax: '041 83 44 04'
    },
    {
      code: '00117',
      agence: 'BLIDA2',
      adress: 'Centre Multi Foctionnel, Batiment n°01, Boulevard Mohamed Boudiaf Blida',
      phone: '025 22 69 37 | 025 22 69 38',
      fax: '025 22 69 39 | 025 22 69 40'
    },
    {
      code: '00118',
      agence: 'Ain Defla',
      adress: 'Rue Emir Abdelkader lot n°72 Route 104 Ain defla',
      phone: '027 5017 65 | 027 50 17 11',
      fax: '027 50 14 53 | 027 50 10 56'
    },
    {
      code: '00120',
      agence: 'TIPAZA',
      adress: 'Lotissement Abane Ramdane',
      phone: '024 37 18 85 | 023 37 18 96',
      fax: '024 37 18 35 | 024 37 17 46'
    },
    {
      code: '00121',
      agence: 'TIZI OUZOU 2',
      adress: 'Boulevard Stiti Ali (Site ENIEM DG) Tizi-Ouzou',
      phone: '026 19 63 95',
      fax: '026 19 63 94 | 026 19 63 32'
    }
   
  ];
 


  filteredContacts: contact[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  searchQuery: string = '';

  ngOnInit() {
    this.filteredContacts = this.contacts;
  }

  get paginatedContacts(): contact[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.filteredContacts.slice(startIndex, startIndex + this.pageSize);
  }

  setPage(page: number) {
    if (page >= 0 && page < this.getTotalPages()) {
      this.currentPage = page;
    }
  }

  filterContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.agence?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 0; // Reset to first page after filtering
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredContacts.length / this.pageSize);
  }

  get pagesArray(): number[] {
    return Array(this.getTotalPages()).fill(0).map((_, index) => index);
  }
}
