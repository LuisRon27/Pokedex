import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})
export class TarjetaPokemonComponent implements OnChanges {

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(): void {
    this.extraerInformacion()
  }

  @Input() data?: Resultado; // Datos básicos del Pokemon, obtenidos de la API
  @Input() seleccionado: boolean = false; // Indica si la tarjeta del Pokemon está seleccionada o no
  @Input() fullData?: Pokemon; // Información completa del Pokemon, obtenida de la API
  @Output() clicked = new EventEmitter<String>(); // Evento emitido cuando se hace click en la tarjeta
  id: string = "0"; // ID del Pokemon

  // Extrae la información del Pokemon de los datos básicos o de los datos completos si están disponibles
  extraerInformacion() {
    if (this.data && this.data.url !== "") { // Si los datos básicos están disponibles
      this.id = this.data.url.substring(34, this.data.url.length - 1); // Extrae el ID del URL de los datos básicos

      return; // Termina la ejecución de la función
    }

    if (this.fullData) { // Si los datos completos están disponibles
      this.id = this.fullData.species.url.substring(42, this.fullData.species.url.length - 1); // Extrae el ID del URL de los datos completos

      this.data = { // Crea un objeto con los datos básicos del Pokemon
        name: this.fullData.species.name,
        url: ""
      }
    }
  }
}
