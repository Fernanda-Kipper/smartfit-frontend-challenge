import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { GetUnitsService } from './services/get-units.service';
import { GetUnitServiceMock } from './mocks/get-units.service.mock';
import { locationMock } from './mocks/location.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let getUnitService: GetUnitsService;

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
        FilterUnitsService,
        {
          provide: GetUnitsService,
          useValue: GetUnitServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    getUnitService = TestBed.inject(GetUnitsService);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set unitLists onSubmit', () => {
    component.onSubmit();

    expect(getUnitService.getFilteredUnits).toHaveBeenCalled();
    expect(component.unitsList).toEqual([locationMock]);
  })
});
