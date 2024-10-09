import { Component, HostListener, Input } from '@angular/core';
import { fillAnimation } from './animations/fill-animation';
import { boxAnimation } from './animations/3d-animation';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrl: './animated-button.component.css',
  animations: [fillAnimation, boxAnimation],
})
export class AnimatedButtonComponent {
  stateAnimation: 'initial' | 'hovered' | 'clicked' = 'initial';

  @Input()
  link?: string;

  @Input()
  animation?: 'fill' | '3d' = '3d';

  @Input()
  color?: string;

  @Input()
  tagName?: 'button' | 'a' = 'button';

  @Input()
  className?: string = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.stateAnimation = 'hovered';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.stateAnimation = 'initial';
  }

  @HostListener('mousedown')
  onMouseDown() {
    this.stateAnimation = 'clicked';
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.stateAnimation = 'hovered';
  }
}
