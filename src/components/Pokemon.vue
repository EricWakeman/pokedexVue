<template>
  <div class="row">
    <p>{{ pokemonprop.name }}</p>
  </div>
</template>

<script>
export default {
  props: { pokemonprop: { type: Object, required: true } },
  setup() {
    return {

    }
  }

}
</script>

<style>

</style>
