import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpLaboral } from '../model/exp-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralServiceService {
  URL = environment.URL + 'explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExpLaboral[]>{
    return this.httpClient.get<ExpLaboral[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ExpLaboral>{
    return this.httpClient.get<ExpLaboral>(this.URL + `detail/${id}`);
  } 

  public save(expLaboral: ExpLaboral): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', expLaboral);
  }

  public update(id: number, expLaboral: ExpLaboral): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, expLaboral);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
