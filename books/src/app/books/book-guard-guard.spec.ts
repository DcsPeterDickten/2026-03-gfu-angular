import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bookGuardGuard } from './book-guard-guard';

describe('bookGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => bookGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
