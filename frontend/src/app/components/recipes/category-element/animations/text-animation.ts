import { animate, state, style, transition, trigger } from '@angular/animations';

export const textAnimation = trigger('textAnimation', [
      state('initial', style({
          transform: 'scale(0)',
          opacity: 0
      })),
      state('hovered', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('initial <=> hovered', animate('500ms ease-out'))
    ])