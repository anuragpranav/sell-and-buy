import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fakeListings } from './fake-data';
import { Listing } from './types';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class ListingsService {

  constructor(private http:HttpClient, ) { }

  getListings(): Observable<Listing[]> {

    return this.http.get<Listing[]>('/api/listings');

    //return fakeListings;
  }

  getListingById(id: string | null): Observable<Listing>{
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string | null): Observable<Listing>{
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {}, httpOptions,
    )   
  }

  getListingForUser(): Observable<Listing[]>{
      return this.http.get<Listing[]>('/api/users/12345/listings')
  }

  deleteListings(id: string): Observable<any>{
    return this.http.delete(`/api/listings/${id}`)
  }

  creatListing(name: string, description: string, price: number) : Observable<Listing>{
    return this.http.post<Listing>(
      '/api/listings',
      {name, description, price},
      httpOptions
    )
  }

  editListing(id: string, name: string, description: string, price: number) : Observable<Listing>{
    return this.http.post<Listing>(
      `/api/listings/${id}`,
      {name, description, price},
      httpOptions
    )
  }
}
