<script setup lang="ts">
import { ref } from 'vue';
import { queryPokemon, Pokemon } from '@/api/pokemon';

const visible = ref(false);
const pokemonDetails = ref<Pokemon>({} as Pokemon);

withDefaults(
  defineProps<{
    pokemon: Pokemon;
  }>(),
  {}
);

async function fetchPokemon(id: number) {
  try {
    Snackbar.loading('Fetching...');
    const data = await queryPokemon(id);
    console.log(data);
    pokemonDetails.value = data;
    visible.value = true;
  } catch (error) {
  } finally {
    Snackbar.clear();
  }
}
</script>

<template>
  <div class="pokemon-card" @click="fetchPokemon(pokemon.id)">
    <div class="name">#{{ pokemon.id }}. {{ pokemon.name }}</div>

    <var-image
      :block="false"
      width="64"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
    />
  </div>

  <var-popup v-model:show="visible">
    <div class="popup-detail">
      <div>
        <var-image
          :block="false"
          width="100"
          :src="pokemonDetails.sprites.front_default"
        />
        <var-image
          :block="false"
          width="100"
          :src="pokemonDetails.sprites.back_default"
        />
      </div>
      <div>
        <div class="name">
          <span class="label">name:</span> {{ pokemonDetails.name }}
        </div>
        <div class="type">
          <span class="label">types:</span>
          {{ pokemonDetails.types.map((v: any) => v.type.name).join(' / ') }}
        </div>
        <div class="height">
          <span class="label">height:</span> {{ pokemonDetails.height }} dm
        </div>
        <div class="weight">
          <span class="label">weight:</span> {{ pokemonDetails.weight / 10 }} kg
        </div>
      </div>
    </div>
  </var-popup>
</template>

<style scoped>
.pokemon-card {
  border: 1px solid #ccc;
  border-bottom-width: 0;
  padding: 12px 0 0;
  text-align: center;

  &:last-child {
    border-bottom-width: 1px;
  }

  .name {
    color: var(--color-primary);
  }
}

.popup-detail {
  width: 84vw;
  padding: 16px 16px 40px;
  /* display: flex; */

  .label {
    color: #999;
    display: inline-block;
    width: 64px;
    margin-left: 32px;
  }
}
</style>
