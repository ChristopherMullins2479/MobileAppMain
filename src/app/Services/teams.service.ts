import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }

  //get_Info():Observable<any>{
   // return this.http.get('https://github.com/openfootball/football.json/blob/master/2020-21/en.1.json');
   // return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=f60f9ef3');
  //}
}
