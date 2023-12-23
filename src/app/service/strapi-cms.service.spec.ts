import { TestBed } from '@angular/core/testing';

import { StrapiCMSService } from './strapi-cms.service';

describe('StrapiCMSService', () => {
  let service: StrapiCMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapiCMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
