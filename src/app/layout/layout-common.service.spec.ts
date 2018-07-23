import { TestBed, inject } from '@angular/core/testing';

import { LayoutCommonService } from './layout-common.service';

describe('LayoutCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutCommonService]
    });
  });

  it('should be created', inject([LayoutCommonService], (service: LayoutCommonService) => {
    expect(service).toBeTruthy();
  }));
});
