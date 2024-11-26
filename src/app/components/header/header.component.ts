import { Component, OnInit } from '@angular/core';
import { BeaService } from 'src/app/services/bea/bea.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isNavbarOpen = false;
  currencies = [
    { currency: 'USD', buy: 134.1938, sell: 134.2088 },
    { currency: 'EUR', buy: 145.2514, sell: 145.3213 },
    { currency: 'GBP', buy: 171.4280, sell: 171.5348 },
    { currency: 'JPY', buy: 83.4798, sell: 83.4943 },
    { currency: 'CNY', buy: 18.4657, sell: 18.4685 },
    { currency: 'CAD', buy: 98.5849, sell: 98.6249 },
    { currency: 'CHF', buy: 149.2867, sell: 149.3698 },
    { currency: 'SEK', buy: 12.7928, sell: 12.7960 },
    { currency: 'DKK', buy: 19.4752, sell: 19.4802 },
    { currency: 'NOK', buy: 12.7094, sell: 12.7145 },
    { currency: 'SDR', buy: 176.6861, sell: 176.6861 },
    { currency: 'SAR', buy: 35.7726, sell: 35.7785 },
    { currency: 'AED', buy: 36.5342, sell: 36.5403 },
    { currency: 'KWD', buy: 438.2554, sell: 438.5908 },
    { currency: 'MAD', buy: 13.5324, sell: 13.5339 },
    { currency: 'TND', buy: 42.6901, sell: 43.1191 },
    { currency: 'LYD', buy: 27.4145, sell: 27.5549 },
    { currency: 'MRU', buy: 3.5333, sell: 3.5337 },
  ];

  selectedLang?: string;
  selectedFlag?: string;
  languages = [
    { name: 'Français', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
    { name: 'العربية', flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg' }
  ];

  constructor(private beaService: BeaService, public languageService: LanguageService) {}

  ngOnInit() {
    this.selectedLang = this.languageService.getCurrentLanguage();
    this.selectedFlag = this.getFlagByLanguage(this.selectedLang);
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  openEbankingWindow(event: Event): void {
    event.preventDefault(); 
    const url = window.location.origin + '/E-Banking';
    window.open(url, '_blank');
  }
  
  openPreDomiciliationWindow(event: Event): void {
    event.preventDefault(); 
    const url = window.location.origin + '/Pré-domiciliation';
    window.open(url, '_blank');
  }
  

  selectLanguage(lang: { name: string, flag: string }, event: Event) {
    event.preventDefault(); // Empêcher la redirection par défaut
    this.languageService.setCurrentLanguage(lang.name);
    this.selectedLang = lang.name;
    this.selectedFlag = lang.flag;
  }

  toggleLanguage(event: Event) {
    event.preventDefault(); // Empêcher la redirection par défaut
    if (this.selectedLang === 'Français') {
      this.selectLanguage(this.languages[1], event); // Passe à l'Arabe
    } else {
      this.selectLanguage(this.languages[0], event); // Passe au Français
    }
  }

  private getFlagByLanguage(lang: string): string {
    const selected = this.languages.find(item => item.name === lang);
    return selected ? selected.flag : '';
  }
}
