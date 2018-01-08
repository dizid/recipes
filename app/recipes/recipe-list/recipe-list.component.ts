import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Ramsløkpasta', 'Pasta med ramsløk, hvitløk, løk og ost',
  'https://images.matprat.no/s4bbbq2pty-jumbotron/large'),
  new Recipe('Elins Stewsuppe', 'Suppe med vitaminen og fartbrennstoff',
  'http://understandall.net/eduHVO/me03/me415.gif')
];

  constructor() { }

  ngOnInit() {
  }

}
