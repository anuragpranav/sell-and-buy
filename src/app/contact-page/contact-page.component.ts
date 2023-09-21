import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{

  email: string='';
  message: string ='';
  listing: Listing;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private listingService: ListingsService
    ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //this.listing = fakeListings.find(listing => listing.id === id); -- find can give null value.
    //const fakeListing =  fakeListings.find(listing => listing.id === id);

    //if(fakeListing !== undefined)
    //{
    //    this.listing = fakeListing;
    //}

    this.listingService.getListingById(id)
    .subscribe(listing => {
      this.listing = listing;
      this.message = `Hi, I'm intersested in your ${this.listing.name.toLowerCase()}!`;
    })

    //this.message = `Hi, I'm intersested in your ${this.listing.name.toLowerCase()}!`;
  }

  sendMessage(): void{
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
