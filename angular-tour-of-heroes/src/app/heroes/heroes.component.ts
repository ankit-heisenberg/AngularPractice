import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero : Hero ;

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero : Hero){
   this.selectedHero = hero;
  }

  delete(heroToDelete : Hero){
    this.heroService.deleteHero(heroToDelete).subscribe(hero=>{
      this.heroes = this.heroes.filter(x => x.id !== heroToDelete.id);
    })
  }

  addHero(heroName : string) : void {
    heroName = heroName.trim();
    if(!heroName) {
      return;
    }
    this.heroService.addHero({ name: heroName } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero)
    }
    );
  }
}
