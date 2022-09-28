import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../../../services/pokemon-service.service';

@Component({
  selector: 'app-info-pokemons',
  templateUrl: './info-pokemons.component.html',
  styleUrls: ['./info-pokemons.component.scss']
})
export class InfoPokemonsComponent implements OnInit {

  title: string='Elements Angular Page';
  name: string = '';
  public mostrar : boolean = true;

  public typePokemon: string[]= ['normal','fire','water','grass','electric','ice','fighting','poison'];

  selectedType :string  = "";

  typePkm(event:any){
    this.selectedType = event.target.value
  }

  constructor(public pokemonService: PokemonServiceService){
  }

  ngOnInit():void{
    this.getPokemonBtn();
    this.showPipe();
  }  

  showPipe(){
    this.mostrar = !this.mostrar;
    console.log('si sirvo');
    
  }

  getPokemonBtn(){

    let btnSearch = document.getElementById("btnSearch");
    let findPkmInput: HTMLInputElement = <HTMLInputElement> document.getElementById("name"); 
    
    btnSearch?.addEventListener("click",()=>{
      this.pokemonService.getPokemon(findPkmInput.value).subscribe({
        next : (resp : any) => {
          
          this.name = resp.name;
          console.log(resp);
        }
      });

    });
  }




}
