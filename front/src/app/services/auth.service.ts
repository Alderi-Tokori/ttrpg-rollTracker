import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {User} from "../resources/user/user.interface";
import {tap} from "rxjs";

interface Auth {
  user_id: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.post<Auth>(environment.apiURL + '/auth', {email, password}).pipe(
      tap(response => {
        localStorage.setItem('user_id', response.user_id);
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }
}
