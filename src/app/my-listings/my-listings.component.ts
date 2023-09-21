import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingService:ListingsService) {
    
  }

  ngOnInit(): void {
    //this.listings = fakeListings;
    this.listingService.getListingForUser()
    .subscribe(listings => this.listings = listings)

  }

  onDeleteClicked(listingId: string ): void{
    //alert(`Deleting the listing with id ${listingId}`);
  this.listingService.deleteListings(listingId)
  .subscribe(()=> {
    this.listings = this.listings.filter(
      listing => listing.id != listingId
    )
  })
  
  }
}
