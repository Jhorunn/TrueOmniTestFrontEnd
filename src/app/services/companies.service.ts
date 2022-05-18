import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyInterface } from '../interfaces/company.interface';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  getCompanies(page: number, recordsPerPage: number): Observable<CompanyInterface[]> {
    return this.http.get<CompanyInterface[]>(this.baseUrl + 'Companies', {params: {'Page': page, 'ReccordsPerPage': recordsPerPage}});
  }
}
