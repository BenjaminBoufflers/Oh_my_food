import { animate, state, style, transition, trigger } from "@angular/animations";

export const boxAnimation = trigger('boxAnimation', [
      state('initial',style({
          transform: 'translate(0, 0)',
        })
      ),
      state('hovered',style({
          transform: 'translate(-4px, -4px)',
          borderRight: 'solid 2px var(--color,#f97316)',
          borderBottom: 'solid 2px var(--color,#f97316)',
          boxShadow: `4px 4px 0 0 var(--color,#f97316), 2px 2px 0px 0px var(--color,#f97316), 2px 1px 1px 0px var(--color,#f97316), 2px 4px 0px 0px var(--color,#f97316)`,
        })
      ),
      state('clicked', style ({
          border: 'solid 2px var(--color,#f97316)',
          transform: 'translate(0, 0)',
          boxShadow: '0px 0px 0 0 var(--color,#f97316)'
      })),
      transition('initial <=> hovered', [
        animate('100ms'),
      ]),
      transition('hovered => clicked', [
        animate('0s', style({border: 'solid 2px var(--color,#f97316)'})),
        animate('100ms', style({transform: 'translate(0, 0)', boxShadow: '0px 0px 0 0 var(--color,#f97316) '})),
      ]),
      transition('clicked => hovered', [
        animate('100ms', style({transform: 'translate(-4px, -4px)',
          borderRight: 'solid 2px var(--color,#f97316)',
          borderBottom: 'solid 2px var(--color,#f97316)',
          boxShadow: '4px 4px 0 0 var(--color,#f97316) , 2px 2px 0px 0px var(--color,#f97316) , 2px 1px 1px 0px var(--color,#f97316) , 2px 4px 0px 0px var(--color,#f97316) '}))
      ])
    ])