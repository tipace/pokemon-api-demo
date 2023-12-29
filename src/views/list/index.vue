<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { queryList } from '@/api/pokemon';
import PokemonList from './components/PokemonList.vue';

const page = ref(1);
const count = ref(0);
const list = ref<any>([]);
const loading = ref(false);

async function getList() {
  try {
    loading.value = true;
    const data = await queryList({
      limit: 10,
      offset: page.value * 10 - 10,
    });
    count.value = data.count;
    list.value = data.results.map((item: any) => ({
      name: item.name,
      id: item.url.split('/')[6],
    }));
  } catch (error) {
    //
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  // getList();
});

watch(page, getList, {
  immediate: true,
});
</script>

<template>
  <var-loading description="LOADING" :loading="loading">
    <pokemon-list :pokemons="list" />
    <var-pagination
      v-if="count"
      :current="page"
      :total="count"
      :show-total="(total) => `共 ${total} 条`"
      @update:current="page = $event"
    />
  </var-loading>
</template>

<style scoped></style>
