import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnChanges {

  // Input para recibir el Pokemon seleccionado
  @Input() pokemon?: Pokemon;

  // Input para recibir el estado de si el detalle está abierto o cerrado
  @Input() abierto: boolean = false;

  // Output para emitir el evento de que se ha clickeado en el componente
  @Output() clicked = new EventEmitter();

  // Variable para almacenar la descripción del Pokemon seleccionado
  descripcion: string = "";

  constructor(private pokemonService: PokemonService) { }

  // Método que se ejecuta cada vez que hay un cambio en los inputs del componente
  ngOnChanges(): void {
    if (this.pokemon) {

      // Se llama al método del PokemonService para obtener la descripción del Pokemon seleccionado
      this.pokemonService.getDescripcion(this.pokemon?.id).then(res => {
        this.descripcion = res

      })
    }
  }

}
