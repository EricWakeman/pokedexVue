<template>
  <div class="card active" style="width: 18rem;">
    <img class="card-img-top" :src="activePokemon.img" alt="Card image cap">
    <div class="card-body text-center">
      <h5 class="card-title">
        {{ activePokemon.name }}
      </h5>
      <div class="card-text">
        <p>height: {{ activePokemon.height }}</p>
        <p>weight: {{ activePokemon.weight }}</p>
      </div>
      <button v-if="!pokeDex.some((pokemon)=> pokemon.name === activePokemon.name)" class="btn btn-outline-success" @click="addToPokeDex">
        Add to Dex
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { pokeService } from '../services/PokeService'
export default {
  setup() {
    return {
      activePokemon: computed(() => AppState.activePokemon),
      pokeDex: computed(() => AppState.pokeDex),
      addToPokeDex() {
        pokeService.addToPokeDex()
      }

    }
  }
}
</script>

<style>
.active {
  background-image: url("https://lh3.googleusercontent.com/proxy/qhz8YxWf4mtiUhEjsMO0XnW3YR7dptBdtAGrc0VS42jWfZXk5SuisEjyXjuJ0-cjkGWY1Pgiu0NX2MMJELW1Pj0ajtnDIum60UwIbu2IJsnwCfByicbw8ovtwYGWFXpmH7z_rxLHrK4");
  background-repeat: no-repeat;
}
</style>
