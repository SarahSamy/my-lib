import { TestBed } from '@angular/core/testing';

import { ReflectiveInjectorService } from './reflective-injector.service';

describe('ReflectiveInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReflectiveInjectorService = TestBed.get(ReflectiveInjectorService);
    expect(service).toBeTruthy();
  });
});
