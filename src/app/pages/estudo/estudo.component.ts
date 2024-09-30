import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-estudo',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './estudo.component.html',
  styleUrl: './estudo.component.css'
})
export class EstudoComponent {
  title = 'Estudar sempre faz a diferença'
  devestudo = 'https://www.udc.edu.br/udcead/assets/images/courses/pic7.jpg'
  altDevestudo = 'desenvolvimento de estudo'
  desenvolverurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_P5M918UO29poLJ3UuyRH5G76J2tIWBpeg&s'
  devAlt = 'desenvolvimento'

}
