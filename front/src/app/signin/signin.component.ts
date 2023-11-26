import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-signin',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, RouterLink, TranslateModule, MatProgressSpinnerModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(128),
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$/)
    ])
  })

  matcher = new ShowOnDirtyErrorStateMatcher();

  hidePassword = true;
  submitting = false;

  async onSubmit() {
    this.submitting = true;

    // TODO: Use EventEmitter with form value
    console.warn(this.signinForm.value);

    this.submitting = false
  }
}
