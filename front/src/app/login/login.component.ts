import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }
}
