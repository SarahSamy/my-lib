import { TestBed } from '@angular/core/testing';

import { ConfigurationUtilService } from './configuration-util.service';

describe('ConfigurationUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigurationUtilService = TestBed.get(ConfigurationUtilService);
    expect(service).toBeTruthy();
  });
});
