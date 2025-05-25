import {HttpEvent, HttpRequest} from "@angular/common/module.d-CnjH8Dlt";
import {HttpHandlerFn} from "@angular/common/http";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export function backendAuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(AuthService).getAuthToken();

  if (!authToken) {
    return next(req);
  }

  // Adds the Bearer token if available
  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${authToken}`),
  });

  return next(newReq);
}
