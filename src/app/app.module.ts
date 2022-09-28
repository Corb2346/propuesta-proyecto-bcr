import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoPokemonsComponent } from './components/modules/sub-menu-uno/info-pokemons/info-pokemons.component';
import { ColorDinamicoDirective } from './libs/directivas/color-dinamico.directive';
import { FormularioComponent } from './components/modules/sub-menu-dos/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoPokemonsComponent,
    ColorDinamicoDirective,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
