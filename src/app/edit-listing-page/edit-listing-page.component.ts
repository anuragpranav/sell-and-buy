import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings, fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit{
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
 
    //this.listing = fakeMyListings.find(listing=>listing.id === id)
    const fakeListing =  fakeListings.find(listing => listing.id == id);
    console.log(fakeMyListings);
    if(fakeListing !== undefined)
    {
        this.listing = fakeListing;
    }
  }

  onSubmit(): void{
    alert('Saving changes to the listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
