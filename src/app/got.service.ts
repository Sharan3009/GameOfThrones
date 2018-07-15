// importing httpclient and http error response
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importing observable
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  public baseUrl = 'https://anapioficeandfire.com/api';

  constructor(private _http: HttpClient) {
    console.log('http-service is called')
  }
  //method to get all books info
  public getAllBooks(): any {
    let allBooks = this._http.get(this.baseUrl + '/books')
    console.log(allBooks)
    return allBooks;
  }
  //method to get all characters info
  public getAllCharacters(): any {
    let allCharacters = this._http.get(this.baseUrl + '/characters')
    console.log(allCharacters)
    return allCharacters;
  }
  //method to get all houses info
  public getAllHouses(): any {
    let allHouses = this._http.get(this.baseUrl + '/houses')
    console.log(allHouses)
    return allHouses;
  }
  // method to get info of single card
  public getSingleCard(url): any {
    let card = this._http.get(this.baseUrl + '/' + url)
    return card;
  }
  // method to handle error
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }
}
