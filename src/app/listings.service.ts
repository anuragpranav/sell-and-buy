import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fakeListings } from './fake-data';
import { Listing } from './types';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

const httpOptionsWithAuthToken = (token: string) => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token,
  })
});


@Injectable({
  providedIn: 'root'
})

export class ListingsService {

  constructor(private http:HttpClient, private auth: AngularFireAuth ) { }

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
      return new Observable<Listing[]>(observer => {
        this.auth.user.subscribe(user => {
          user && user.getIdToken().then(token => {
            if(user && token) {
              this.http.get<Listing[]>(`/api/users/${user.uid}/listings`,  httpOptionsWithAuthToken(token))
              .subscribe((listings) => {
                  observer.next(listings);
                })
            }
            else
            {
              observer.next([])
            }
          })
        })
      })
      //return this.http.get<Listing[]>('/api/users/12345/listings')
  }

  deleteListings(id: string): Observable<any>{
    return new Observable<any>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.delete(`/api/listings/${id}`, httpOptionsWithAuthToken(token)).subscribe(()=> observer.next());
        })
      })
    })
    //return this.http.delete(`/api/listings/${id}`)
  }

  creatListing(name: string, description: string, price: number) : Observable<Listing>{
    return new Observable<Listing>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.post<Listing>(
              '/api/listings',
              {name, description, price},
              httpOptionsWithAuthToken(token)
            ).subscribe(()=>observer.next());
        })
      })
    })
    // return this.http.post<Listing>(
    //   '/api/listings',
    //   {name, description, price},
    //   httpOptions
    // )
  }

  editListing(id: string, name: string, description: string, price: number) : Observable<Listing>{
    return new Observable<Listing>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
             return this.http.post<Listing>(
                    `/api/listings/${id}`,
                    {name, description, price},
                    httpOptionsWithAuthToken(token))
                    .subscribe(()=> observer.next())
        });
      });
    });
    // return this.http.post<Listing>(
    //   `/api/listings/${id}`,
    //   {name, description, price},
    //   httpOptions
    // )
  }
}
