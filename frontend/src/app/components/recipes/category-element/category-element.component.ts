import { Component, HostListener, Input } from '@angular/core';
import { CategoriesType } from '../../../types/types';
import { textAnimation } from './animations/text-animation';

@Component({
  selector: 'app-category-element',
  templateUrl: './category-element.component.html',
  styleUrl: './category-element.component.css',
  animations: [textAnimation,    
  ]
})

export class CategoryElementComponent {
  stateAnimation: 'initial' | 'hovered' = 'initial';

  @Input()
  element!: CategoriesType;

  @HostListener('mouseenter')
  onMouseEnter(){
    if(this.stateAnimation === 'initial'){
      this.stateAnimation = 'hovered';
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    if(this.stateAnimation === 'hovered'){
      this.stateAnimation = 'initial';
    }
  }
}
