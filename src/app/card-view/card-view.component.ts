import { GotService } from '../got.service';
import { Component, OnInit } from '@angular/core';
//importing activated route and router
import { ActivatedRoute, Router } from '@angular/router';
//importing location for go back button
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  //adding provider for go back button
  providers: [Location]
})
export class CardViewComponent implements OnInit {
  // variable to store data for single card
  public card: any;
  //number to show number of elements of array at time of load
  public show: number = 5;

  constructor(private _route: ActivatedRoute, private _httpService: GotService, private location: Location, private router: Router) { }

  ngOnInit() {
    //capturing url as a paremeter from url
    let url = this._route.snapshot.paramMap.get('url')
    this._httpService.getSingleCard(url).subscribe(
      data => {
        this.card = data;
        console.log(this.card)
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  //go back button functionality
  goBackToPreviousPage(): any {
    this.location.back()
  }
}
