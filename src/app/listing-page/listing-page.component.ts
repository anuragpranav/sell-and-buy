import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data'
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) {

  }

  ngOnInit(): void {
    
    this.listings = this.listingsService.getListings();
    
    //this.listings = fakeListings;
  }

}
