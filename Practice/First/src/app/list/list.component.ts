import { Component, OnInit } from '@angular/core';
import { TvserieslistService } from '../services/tvserieslist/tvserieslist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title : string = 'TV Series to Binge';
  logoPath : string = 'assets/Heisenberg.png';
  listItems : any[];
  constructor(private _tvSeriesList: TvserieslistService) { 
  this.listItems = _tvSeriesList.getTvSeries();
  }

  ngOnInit() {
  }

}
