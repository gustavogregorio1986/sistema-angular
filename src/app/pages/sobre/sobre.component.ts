import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  urlimagem = 'https://canaldoprodutor.tv.br/wp-content/uploads/2022/05/o-que-faz-um-analista-de-sistemas.jpg'
  devAlt = 'estudo de desenvolvimento de sistemas'
}
