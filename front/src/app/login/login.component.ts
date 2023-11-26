import {Component} from '@angular/core';
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

  hidePassword = true;
  submitting = false;

  onSubmit() {
    this.submitting = true;

    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    this.submitting = false;
  }
}
