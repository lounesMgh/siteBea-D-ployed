import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
 
  currentPasswordFieldType: string = 'password';
    newPasswordFieldType: string = 'password';
    confirmPasswordFieldType: string = 'password';

    togglePasswordVisibility(field: string): void {
        if (field === 'currentPassword') {
            this.currentPasswordFieldType = this.currentPasswordFieldType === 'password' ? 'text' : 'password';
        } else if (field === 'newPassword') {
            this.newPasswordFieldType = this.newPasswordFieldType === 'password' ? 'text' : 'password';
        } else if (field === 'confirmPassword') {
            this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
        }
    }
}
