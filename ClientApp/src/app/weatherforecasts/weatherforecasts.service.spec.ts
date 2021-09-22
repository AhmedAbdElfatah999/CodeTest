import { TestBed } from '@angular/core/testing';

import { WeatherforecastsService } from './weatherforecasts.service';

describe('WeatherforecastsService', () => {
  let service: WeatherforecastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherforecastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
