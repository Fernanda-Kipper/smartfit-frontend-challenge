import { TestBed } from '@angular/core/testing';

import { FilterUnitsService } from './filter-units.service';

describe('FilterUnitsService', () => {
  let service: FilterUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
