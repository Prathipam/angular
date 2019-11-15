import { TestBed } from '@angular/core/testing';

import { RegsiterService } from './regsiter.service';

describe('RegsiterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegsiterService = TestBed.get(RegsiterService);
    expect(service).toBeTruthy();
  });
});
