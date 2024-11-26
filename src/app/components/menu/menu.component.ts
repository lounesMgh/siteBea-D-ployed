import { Component, HostListener, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Menu } from './menu';
import { BeaService } from 'src/app/services/bea/bea.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  isNavbarCollapsed = false;
  openMenu?: string | null;
  subMenuClick = false;
  isMobileView = false;
  @Input()activeSubMenu?: string | null;
  private navigationSubscription: Subscription | undefined;

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titleNormal: 'Finance standard',
      url: '',
      sousMenu: [
        { id: '11', icon: 'fa fa-home', titleNext: 'Accueil', url: '/' },
        { id: '12', titleNormal: 'Financements', titleNext: 'entreprises', url: '/financements-entreprises' },
        { id: '13', titleNormal: 'Financements', titleNext: 'particuliers', url: '/financements-particuliers' },
        { id: '14', titleNormal: 'Solutions', titleNext: 'monétique', url: '/solutions-monetique' },
        { id: '15', titleNormal: 'Commerce', titleNext: 'international', url: '/commerce-international' },
        { id: '16', titleNormal: 'Nos', titleNext: 'contacts', url: '/nos-contacts' },
        { id: '17', titleNormal: 'Nos', titleNext: 'actualités', url: '/nos-actualités', alignRight: true }
      ]
    },
    {
      id: '2',
      titleNormal: 'Finance Islamique',
      url: '',
      sousMenu: [
        { id: '21', icon: 'fa fa-home', titleNext: "Accueil", url: '/finance-islamique' },
        { id: '22', titleNormal: 'Nos', titleNext: 'comptes', url: '/finance-islamique/nos-comptes' },
        { id: '23', titleNormal: 'Financements', titleNext: 'particuliers', url: '/finance-islamique/financement-particuliers' },
        { id: '24', titleNormal: 'Financements', titleNext: 'entreprises', url: '/finance-islamique/financement-entreprises' },
        { id: '25', titleNormal: 'Nos', titleNext: "conditions", url: '/finance-islamique/nos-conditions' },
        { id: '26', titleNormal: 'Nos', titleNext: 'contacts', url: '/finance-islamique/nos-contacts' },
        { id: '27', titleNormal: 'Nos', titleNext: 'actualités', url: '/finance-islamique/nos-actualités', alignRight: true }
      ]
    }
  ];

  constructor(private beaService: BeaService,
     private router: Router, 
     private viewportScroller: ViewportScroller,
     public languageService: LanguageService) {}

  ngOnInit() {
    this.openMenu = '1';
    this.activeSubMenu = '11';
    this.checkScreenSize();
    this.navigationSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/finance-islamique')) {
          this.openMenu = '2';
          this.activeSubMenu = '21'; // Fixer le sous-menu actif à l'accueil de Finance Islamique
        } else if (event.url.startsWith('/')) {
          this.openMenu = '1';
          this.activeSubMenu = '11'; // Fixer le sous-menu actif à l'accueil de Finance Standard
        }
      }
    });
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
    }, 0);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 992;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    if (this.isNavbarCollapsed) {
      this.openMenu = null;
    }
  }

  toggleMenu(menuId: string) {
    if (this.isMobileView) {
      this.openMenu = this.openMenu === menuId ? null : menuId;
    } else {
      this.openMenu = menuId;
    }
    if (menuId === '1') {
      this.beaService.setCurrentMenu('standard');
      this.router.navigate(['/']);
    } else if (menuId === '2') {
      this.beaService.setCurrentMenu('islamique');
      if (!this.router.url.startsWith('/finance-islamique')) {
        this.activeSubMenu = '21';
        this.router.navigate(['/finance-islamique']);
      }
    }
  }

  navigateTo(route: string, subMenuId: string) {
    this.activeSubMenu = subMenuId;
    
    this.router.navigate([route]).then(() => {
      this.activeSubMenu = subMenuId;
    });
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Défilement en haut de la page
    }, 0);
  }

  isMenuOpen(menuId: string): boolean {
    return this.openMenu === menuId;
  }

  isActiveSubMenu(subMenuId: string): boolean {
    return this.activeSubMenu === subMenuId;
  }
  closeNavbar() {
    this.isNavbarCollapsed = false;
  }
}
