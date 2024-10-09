import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { CategoriesType } from '../../types/types';
import { categories } from '../../data/categories.data';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrl: './lateral-menu.component.css',
  animations: [trigger('slideAnimation', [
    state('closed', style({
      transform: 'translate(-100%, 0)'
    })),
    state('open', style({
      transform: 'translate(0, 0)'
    })),
    transition('closed <=> open', animate('500ms ease-in-out'))
  ])]
})


export class LateralMenuComponent implements OnInit {
  stateAnimation: 'closed' | 'open' = 'closed';
  faGear = faGear;
  categories: CategoriesType[] = [];
  
  ngOnInit(): void {
    this.categories = categories
  }

  toggleLateralMenu(){
    this.stateAnimation = this.stateAnimation === 'closed' ? 'open' : 'closed';
  }
}
