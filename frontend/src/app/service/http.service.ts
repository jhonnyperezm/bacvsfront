import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL;
   constructor(private readonly _http: HttpClient ) { }


  getTecnologias() {
    return this._http.get<Technology[]>(`${this.baseUrl}tecnologia`);
  }

  getTecnologia(id: number) {
    return this._http.get<Technology>(`${this.baseUrl}tecnologia/${id}`);
  }

  getSearchTechnology(query: string){
    return this._http.get<Technology>(`${this.baseUrl}tecnologia/search/${query}`);
  }

}
