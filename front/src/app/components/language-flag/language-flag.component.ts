import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-flag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-flag.component.html',
  styleUrl: './language-flag.component.scss'
})
export class LanguageFlagComponent {
  @Input({required: true}) language!: string;
  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  onClick() {
    this.translate.use(this.language);
    localStorage.setItem('language', this.language);
  }
}
