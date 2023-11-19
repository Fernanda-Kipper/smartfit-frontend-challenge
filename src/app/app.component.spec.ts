import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import { LegendComponent } from './components/legend/legend.component';
import { FilterUnitsService } from './services/filter-units.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FormsComponent,
        CardsListComponent,
        CardComponent,
        LegendComponent,
        FooterComponent
      ],
      providers: [
        FilterUnitsService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
