import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoPokemonsComponent } from './components/modules/sub-menu-uno/info-pokemons/info-pokemons.component';
import { FormularioComponent } from './components/modules/sub-menu-dos/formulario/formulario.component';

const routes: Routes = [
  {path: '' , 
  redirectTo: 'AppComponent', 
  pathMatch: 'full'
  },
  {
    path: 'elements',
    component: InfoPokemonsComponent
  },
  {
    path: 'contacto',
    component: FormularioComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
