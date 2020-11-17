import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor( private http: HttpClient ) { }

  public API = 'https://localhost:32770/WeatherForecast/variables';

  getData(): Observable<string[]> {
    return this.http.get<string[]>(this.API)
  }

}