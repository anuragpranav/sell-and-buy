import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})

export class ListingDetailPageComponent implements OnInit{ 
  isLoading: boolean = true;
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    //private router: Router,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //const fakeListing = fakeListings.find(listing => listing.id === id);

    //if (fakeListing !== undefined){
      //this.listing = fakeListing;
    //}

    this.listingsService.getListingById(id)
    .subscribe(listing => {
      this.listing = listing;
      this.isLoading = false;
    })

    this.listingsService.addViewToListing(id)
    .subscribe(()=> console.log('Views updated'));
  }
}
