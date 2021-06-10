export class ActivePokemon {
  constructor({ name, sprites, weight, height, url }) {
    this.name = name
    this.img = sprites.front_default
    this.weight = weight
    this.height = height
    this.url = url
  }
}
