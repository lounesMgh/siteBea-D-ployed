import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeaService {
  private currentMenuSubject = new BehaviorSubject<string>('standard');
  currentMenu$ = this.currentMenuSubject.asObservable();

  setCurrentMenu(menu: string) {
    this.currentMenuSubject.next(menu);
  }

  constructor(private router: Router) { }

  openNewWindow(route: string): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([route])
    );
    window.open(url, '_blank');
  }
  openNewWindowExtern(route: string): void {
    window.open(route, '_blank');
  }
  navigateTo(route: string, menu: string): void {
    this.setCurrentMenu(menu);
    this.router.navigate([route]);
  }
}
