import { TestBed, inject } from '@angular/core/testing';

import { TvserieslistService } from './tvserieslist.service';

describe('TvserieslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvserieslistService]
    });
  });

  it('should be created', inject([TvserieslistService], (service: TvserieslistService) => {
    expect(service).toBeTruthy();
  }));
});
