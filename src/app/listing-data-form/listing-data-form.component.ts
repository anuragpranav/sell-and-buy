import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit{
@Input() buttonText: string;
@Input() CurrentName: string;
@Input() CurrentDescription: string;
@Input() CurrentPrice: any;

  name: string = '';
  description: string='';
  price: string='';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.name = this.CurrentName,
    this.description = this.CurrentDescription
    this.price = this.CurrentPrice    
  }

  onButtonClicked(): void {
      this.onSubmit.emit({
        id: "",
        name: this.name,
        description: this.description,
        price: Number(this.price),
      });

  }
}
