<script setup lang="ts">
import PokemonCard from './PokemonCard.vue';
// import { testPost } from '@/api/pokemon';

// const props = defineProps(['pokemons']);
defineProps<{
  pokemons: any[];
}>();

// function testClick() {
//   // console.log(props.pokemons);
//   testPost(3);
// }
</script>

<template>
  <!-- <var-button type="primary" @click="testClick">test</var-button> -->
  <div class="pokemon-list">
    <pokemon-card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<style scoped>
.pokemon-list {
  padding: 12px 16px 0;
  height: 80vh;
  overflow: scroll;
}
</style>
