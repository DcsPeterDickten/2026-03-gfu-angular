import { CanActivateFn } from '@angular/router';

export const bookGuardGuard: CanActivateFn = (route, state) => {
  console.log('bookGuardGuard', route, state);
  return route.params['isbn'] !== '999';
};
