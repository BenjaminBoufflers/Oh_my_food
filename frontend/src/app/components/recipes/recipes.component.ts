import { Component, OnInit } from '@angular/core';
import { categories } from '../../data/categories.data';
import { CategoriesType } from '../../types/types';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',

})
export class RecipesComponent implements OnInit {
  categories: CategoriesType[] = [];

  ngOnInit(): void {
    this.categories = categories;
  }
}
