import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment.dev';
import { catchError, map, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  contactSubject = new BehaviorSubject<any[]>([]);
  public contactSubject$ = this.contactSubject.asObservable();

  apiBaseUrl = '';

  constructor(
    private httpClient: HttpClient,
  ) { this.apiBaseUrl = environment.apiBaseUrl }

  public fetchContacts(){
    const getAllContactsUrl = "/api/list"
    return this.httpClient.get<any>(
      `${this.apiBaseUrl}${getAllContactsUrl}`)
      .pipe(
        map((response) => {
          this.contactSubject.next(response);
          return response;
        }),
        catchError ((err: any) => {
          return this.handleError(err)
        })
      );
  }

  public updateContact(payload: any){
    const updateContactUrl = "/api/update"
    return this.httpClient.post<any>(
      `${this.apiBaseUrl}${updateContactUrl}`, payload);
  }

  public createContact(payload: any){
    const createContactUrl = "/api/create"
    return this.httpClient.post<any>(
      `${this.apiBaseUrl}${createContactUrl}`, payload);
  }

  public deleteContact(payload: any){
    const deleteContactUrl = "/api/delete"
    return this.httpClient.post<any>(
      `${this.apiBaseUrl}${deleteContactUrl}`, payload);
  }

  public searchTerm(prompts: string[]){
    const searchUrl = "/api/search"
    const promptsStr = prompts.join("+");
    return this.httpClient.get<any>(
      `${this.apiBaseUrl}${searchUrl}?q=${promptsStr}`)
      .pipe(
        map((res) => {
          return res
        }),
        catchError ((err: any) => {
          return this.handleError(err)
        })
      );
  }

  private handleError(e: any) {
    let error: IErrorResponse;
    if (e.error instanceof ErrorEvent) {
      // client-side error
      error = {
        message: e.error.message,
      };
    } else {
      console.log("Server Error", e);
      // server-side error
      error = {
        status: e.status,
        message: e.error,
      };
    }
    return throwError(() => {
      return error;
    });
  }
}

export interface IErrorResponse {
  type?: ErrorTypeEnum,
  status?: number,
  message: string,
}

export enum ErrorTypeEnum {
  WARN, CRITICAL, BLOCKER, ERROR
}
