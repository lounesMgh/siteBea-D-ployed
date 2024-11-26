import { Component } from '@angular/core';

@Component({
  selector: 'app-e-banking',
  templateUrl: './e-banking.component.html',
  styleUrls: ['./e-banking.component.css']
})
export class EBankingComponent {
  passwordFieldType: string = 'password';

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
