import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero : Hero;
  constructor(
    private heroService : HeroService,
    private route : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    var id = +this.route.snapshot.paramMap.get('id');
    if(id != null && id!=0){
      this.getHero(id);
    }
  }

  goBack(): void {
    this.location.back;
  }

  getHero(id: number){
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(){
    this.heroService.updateHero(this.hero).subscribe(()=> this.goBack() );
  }
}
