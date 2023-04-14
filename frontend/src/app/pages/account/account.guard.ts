import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanLoadFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/components/auth/auth.service';

export const UserPageCanActive: CanActivateFn = (
  activatedRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  return inject(AuthService).user.pipe(
    map(
      (user) =>
        user.isLogged ||
        router.createUrlTree(['account', 'login'])
    )
  );
};

export const UserPageCanLoad: CanLoadFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return inject(AuthService).user.pipe(
    map((user) => user.isLogged)
  );
};
