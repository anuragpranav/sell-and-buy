import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings, fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit{
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    //this.listing = fakeMyListings.find(listing=>listing.id === id)
    //const fakeListing =  fakeListings.find(listing => listing.id == id);
    //console.log(fakeMyListings);
    //if(fakeListing !== undefined)
    //{
    //    this.listing = fakeListing;
    //}

    this.listingService.getListingById(id)
    .subscribe(listing => this.listing = listing)
  }

  onSubmit({name, description, price} : {name: string, description: string, price: number}): void{
    //alert('Saving changes to the listing...');
    this.listingService.editListing(this.listing.id, name, description, price)
    .subscribe(()=> {
      this.router.navigateByUrl('/my-listings');
    })
    //this.router.navigateByUrl('/my-listings');
  }
}
