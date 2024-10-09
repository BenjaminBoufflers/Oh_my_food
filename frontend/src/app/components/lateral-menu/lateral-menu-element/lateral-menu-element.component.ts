import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesType } from '../../../types/types';
import { faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lateral-menu-element',
  templateUrl: './lateral-menu-element.component.html',
  styleUrl: './lateral-menu-element.component.css'
})
export class LateralMenuElementComponent {
  faUtensilSpoon = faUtensilSpoon;

  constructor(private route: ActivatedRoute){}

  isActive(categoryQuery: string): boolean {
    return this.route.snapshot.queryParams['category'] === categoryQuery;
  }

  @Input()
  element!: CategoriesType;
}
