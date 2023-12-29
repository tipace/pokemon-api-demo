<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <var-image src="@/assets/pokemon.png" />

    <router-link to="/list">
      <var-button type="primary">发现宝可梦</var-button>
    </router-link>
  </div>
</template>

<style scoped></style>
