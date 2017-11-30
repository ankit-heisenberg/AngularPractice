import { Injectable } from '@angular/core';

@Injectable()
export class TvserieslistService {
  listItems : any[] = ['Breaking Bad','Game of Thrones','Friends','Silicon Valley'];
  constructor() { }
 
  getTvSeries(){
   return this.listItems;
 }

  addNewTvShow(tvShow : string){
    this.listItems.push(tvShow);
  }
}
