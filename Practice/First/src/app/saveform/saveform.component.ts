import { Component, OnInit } from '@angular/core';
import { TvserieslistService } from '../services/tvserieslist/tvserieslist.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-saveform',
  templateUrl: './saveform.component.html',
  styleUrls: ['./saveform.component.css']
})
export class SaveformComponent implements OnInit {
  newMovie : string = '';
  constructor(private _tvSeriesList : TvserieslistService) { 

  }

  ngOnInit() {
  }

  onSaveClick(){
    if(this.newMovie){
      console.log(this.newMovie);
      this._tvSeriesList.addNewTvShow(this.newMovie);
      this.newMovie = '';
    }
  }
}
