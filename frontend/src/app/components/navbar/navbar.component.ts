import { Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MenuType } from '../../types/types';
import {
  faHome,
  faBook,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  menu: MenuType[] = [
    { title: 'Accueil', path: '/', icon: faHome },
    { title: 'Recettes', path: '/recipes', icon: faBook },
    { title: 'Contact', path: '/contact', icon: faEnvelopeOpenText },
  ];

  @HostBinding() isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
