import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFlagComponent } from './language-flag.component';

describe('LanguageFlagComponent', () => {
  let component: LanguageFlagComponent;
  let fixture: ComponentFixture<LanguageFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageFlagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
