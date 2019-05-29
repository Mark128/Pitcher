import { TestBed, inject } from '@angular/core/testing';

import { TechDetailResolverService } from './tech-detail-resolver.service';

describe('TechDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechDetailResolverService]
    });
  });

  it('should be created', inject([TechDetailResolverService], (service: TechDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
