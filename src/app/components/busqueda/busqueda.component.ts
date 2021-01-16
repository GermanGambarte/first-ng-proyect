import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:any[]=[];
  termino:string;
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesServise:HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this._heroesServise.buscarHeroes(params['termino'])
    })
  }
  
  

}
