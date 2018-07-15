//importing service
import { GotService } from '../got.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //all cards array
  public allCards = [];
  //sortName for property name by which sorting needs to be done
  public sortName: String = '';
  //sortBool for setting ascending and descending
  public sortBool: boolean = true;

  constructor(private _httpService: GotService) { }

  ngOnInit() {
    //getting all the cards (houses+books+characters)
    this._httpService.getAllBooks().subscribe(
      data => {
        this.allCards = data;
        this._httpService.getAllCharacters().subscribe(
          data => {
            this.allCards = this.allCards.concat(data);
            this._httpService.getAllHouses().subscribe(
              data => {
                this.allCards = this.allCards.concat(data);
                console.log(this.allCards)
              },
              error => {
                console.log(error.errorMessage)
              }
            )
          },
          error => {
            console.log(error.errorMessage)
          }
        )
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  //function to fetch all the books data
  public getBooks() {
    this._httpService.getAllBooks().subscribe(
      data => {
        this.allCards = data
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  //function to fetch all the characters data
  public getCharacters() {
    this._httpService.getAllCharacters().subscribe(
      data => {
        this.allCards = data
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  //function to fetch all the houses data
  public getHouses() {
    this._httpService.getAllHouses().subscribe(
      data => {
        this.allCards = data
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
}
