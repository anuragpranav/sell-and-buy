import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  onDeleteClicked(listingId: string ): void{
    alert(`Deleting the listing with id ${listingId}`);
  }
}
