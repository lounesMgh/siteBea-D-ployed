import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { BeaService } from 'src/app/services/bea/bea.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('firstModal') firstModal?: ElementRef;
  activeSubMenu: string = '';
  activeSubMenuIslam: string = '';
  setActiveSubMenu(subMenuId: string) {
    this.activeSubMenu = subMenuId;
  }
  setActiveSubMenuIslam(subMenuId: string) {
    this.activeSubMenuIslam = subMenuId;
  }
  constructor(private renderer: Renderer2, public beaService: BeaService) {}

  ngAfterViewInit() {
    this.checkAndOpenModalIfAppropriate();
  }

  checkAndOpenModalIfAppropriate() {
    const currentDate = new Date();

    const aachouraDate = new Date(2024, 6, 20);

    if (currentDate.getDate() === aachouraDate.getDate() &&
        currentDate.getMonth() === aachouraDate.getMonth()) {
      this.openModal();
    }
  }

  openModal() {
    const modalElement = this.firstModal?.nativeElement;
    this.renderer.addClass(modalElement, 'show');
    modalElement.style.display = 'block';
  }

  closeModal() {
    const modalElement = this.firstModal?.nativeElement;
    this.renderer.removeClass(modalElement, 'show');
    modalElement.style.display = 'none';
  }

  onBackgroundClick(event: MouseEvent) {
    const modalContentElement = (this.firstModal?.nativeElement as HTMLElement).querySelector('.modal-content');
    if (modalContentElement && !modalContentElement.contains(event.target as Node)) {
      this.closeModal();
    }
  }
}
