import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LanguageFlagComponent} from "../language-flag/language-flag.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, LanguageFlagComponent],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  languages = ['fr', 'en']
  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;

    translate.use(localStorage.getItem('language') || 'fr');
  }
}
