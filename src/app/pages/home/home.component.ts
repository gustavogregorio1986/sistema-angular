import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagemurl = 'http://arquivo.devmedia.com.br/marketing/img/artigo-atividades-basicas-ao-processo-de-desenvolvimento-de-software-5413.png'
  altImagem = "desenvolvendo"
}
