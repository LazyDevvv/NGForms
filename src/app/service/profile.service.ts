import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../model/profile';


export type EntityResponseType = HttpResponse<Profile>;


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private http: HttpClient) { }

  save(profile: Profile): Observable<any> {
    return this.http.post<Profile>(environment.apiUrl + '/profile', profile);
  }

}
