import { animate, state, style, transition, trigger } from "@angular/animations";

export const fillAnimation =  trigger('fillAnimation', [
      state('initial', style({
        background: 'linear-gradient(45deg, var(--color,#f97316) 50%, transparent 50%)',
        backgroundSize: '300% 100%',
        backgroundPosition: '100% 0%',
      })),
      state('hovered', style({
        background: 'linear-gradient(45deg, var(--color,#f97316) 50%, transparent 50%)',
        backgroundSize: '300% 100%',
        backgroundPosition: '0% 0%',
        color: 'white',
      })),
      state('clicked', style ({
        border: 'solid 2px var(--color,#f97316)',
        background: 'linear-gradient(45deg, var(--color,#f97316) 50%, transparent 50%)',
        backgroundSize: '300% 100%',
        backgroundPosition: '100% 0%',
      })),
      transition('void => initial', [ animate('0s')]),
      transition('* <=> *', [
        animate('500ms')
      ]),
      
    ])