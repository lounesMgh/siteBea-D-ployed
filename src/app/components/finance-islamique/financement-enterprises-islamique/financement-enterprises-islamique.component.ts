import { Component } from '@angular/core';

@Component({
  selector: 'app-financement-enterprises-islamique',
  templateUrl: './financement-enterprises-islamique.component.html',
  styleUrls: ['./financement-enterprises-islamique.component.css']
})
export class FinancementEnterprisesIslamiqueComponent {
  accordions: { [key: string]: boolean } = {
    collapseOne: true,
    collapseThree: true,
    collapseFive: true
  };
  

  toggleAccordion(accordion: string): void {
    this.accordions[accordion] = !this.accordions[accordion];
  }

  isAccordionOpen(accordion: string): boolean {
    return this.accordions[accordion];
  }
}