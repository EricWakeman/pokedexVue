<template>
  <div class="row m-5">
    <div class="col-3 border p-3">
      <Pokemon v-for="pokemon in pokemon" :key="pokemon.id" :pokemonprop="pokemon" @click="getActivePokemon(pokemon.url)" class="px-3" />
    </div>
    <div class="col-6 d-flex justify-content-center text-dark">
      <ActivePokemon v-if="activePokemon" />
    </div>
    <div class="col-3 border p-3">
      <Pokemon v-for="pokemon in pokeDex " :key="pokemon.id" :pokemonprop="pokemon" class="px-3" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { pokeService } from '../services/PokeService'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      pokeService.getPokemon()
      pokeService.getPokeDex()
    })
    return {
      pokemon: computed(() => AppState.pokemon),
      activePokemon: computed(() => AppState.activePokemon),
      pokeDex: computed(() => AppState.pokeDex),
      getActivePokemon(url) {
        pokeService.getActivePokemon(url)
      }
    }
  }

}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
