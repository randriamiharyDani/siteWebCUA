import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CardActualiteComponent } from "../../components/card-actualite/card-actualite.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent, CardActualiteComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
