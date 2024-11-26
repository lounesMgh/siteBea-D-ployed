import { Component } from '@angular/core';
import { BeaService } from 'src/app/services/bea/bea.service';

@Component({
  selector: 'app-pre-domiciliation',
  templateUrl: './pre-domiciliation.component.html',
  styleUrls: ['./pre-domiciliation.component.css']
})
export class PreDomiciliationComponent {
  passwordFieldType: string = 'password';

  constructor(private beaService:BeaService){
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  openChangePasswordWindow(event: Event): void {
    event.preventDefault();
    this.beaService.openNewWindow('/Change-password');
  }
}
