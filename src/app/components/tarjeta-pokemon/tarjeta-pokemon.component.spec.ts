import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPokemonComponent } from './tarjeta-pokemon.component';

describe('TarjetaPokemonComponent', () => {
  let component: TarjetaPokemonComponent;
  let fixture: ComponentFixture<TarjetaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
