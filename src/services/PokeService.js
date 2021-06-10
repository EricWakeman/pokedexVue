import { api } from './AxiosService'
import { AppState } from '../AppState'
import { ActivePokemon } from '../models.js/ActivePokemon'
import { Pokemon } from '../models.js/Pokemon'
import axios from 'axios'
class PokeService {
  async getPokemon() {
    const res = await api.get()
    AppState.pokemon = res.data.results.map(p => new Pokemon(p))
  }

  async getActivePokemon(url) {
    const res = await api.get(url)
    AppState.activePokemon = new ActivePokemon(res.data)
  }

  async addToPokeDex() {
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/Wyatt/pokemon', AppState.activePokemon)
    AppState.pokeDex.push(new Pokemon(res.data))
  }

  async getPokeDex() {
    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/Wyatt/pokemon')
    AppState.pokeDex = res.data.map(p => new Pokemon(p))
  }
}

export const pokeService = new PokeService()
