import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EstudoComponent } from './pages/estudo/estudo.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'sobre', component: SobreComponent },
    { path:'estudo', component: EstudoComponent },
    { path:'contato', component: ContatoComponent }
];
