import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-home',
  templateUrl: './icon-home.component.html',
  styleUrl: './icon-home.component.css'
})
export class IconHomeComponent {
  
  @Input()
  size: number = 34;
  @Input()
  color: string = "black"
}
