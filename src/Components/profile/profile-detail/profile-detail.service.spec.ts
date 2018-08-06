import { TestBed, inject } from '@angular/core/testing';

import { ProfileDetailService } from './profile-detail.service';

describe('ProfileDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileDetailService]
    });
  });

  it('should be created', inject([ProfileDetailService], (service: ProfileDetailService) => {
    expect(service).toBeTruthy();
  }));
});
