import { Component, Input } from '@angular/core';
import { MenuType } from '../../../types/types';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrl: './nav-element.component.css',
  animations: [
    trigger('scaleAnimation', [
      state('inactive', style({
         scale: 1
      })),
      state('active', style({
        scale: 1.2
      })),
      transition('inactive <=> active', animate('200ms ease-in-out'))
    ]),
    trigger('divAnimation', [
      state('inactive', style({
        width: '0%',
      })),
      state('active', style({
        width: '100%',
      })),
      transition('inactive <=> active', [
        animate('500ms ease-out')
      ]),
    ])
  ]
  
})
export class NavElementComponent {
  hovered: boolean = false;

  @Input()
  element!: MenuType;

  onMouseEnter() {
    !this.hovered && (this.hovered = true);
  }
  onMouseLeave() {
    this.hovered && (this.hovered = false);
  }

}
