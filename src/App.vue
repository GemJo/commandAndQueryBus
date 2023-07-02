<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/command">Command</RouterLink>
      <RouterLink to="/query">query</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
