import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, RouterLink, TranslateModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  matcher = new ShowOnDirtyErrorStateMatcher();

  private authService = inject(AuthService);

  hidePassword = true;
  submitting = false;

  onSubmit() {
    this.submitting = true;

    this.authService.login(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? '',
    ).subscribe({
      next: () => {
        this.submitting = false;
        // Redirection ou autre logique après connexion réussie
      },
      error: () => {
        this.submitting = false;
        // Gestion des erreurs
      }
    });
  }
}
