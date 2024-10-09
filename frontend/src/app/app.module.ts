import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import pour les animations
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './components/footer/footer.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavElementComponent } from './components/navbar/nav-element/nav-element.component';
import { IconHomeComponent } from './components/svg/icon-home/icon-home.component';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { LateralMenuElementComponent } from './components/lateral-menu/lateral-menu-element/lateral-menu-element.component';
import { CategoryElementComponent } from './components/recipes/category-element/category-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    RecipesComponent,
    ContactComponent,
    NavElementComponent,
    IconHomeComponent,
    AnimatedButtonComponent,
    LateralMenuComponent,
    LateralMenuElementComponent,
    CategoryElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
