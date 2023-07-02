<template>
  <button
    :class="{ 'g-btn--block': block }"
    @click="buttonWasClicked"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(['click']);

interface Props {
  block?: boolean;
}
const props = defineProps<Props>();

const buttonWasClicked = () => { emits('click') }
</script>

<style scoped>
button {
  background: #4f8b8c;
  border: none;
  min-height: 40px;
  padding: 0 10px;
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 400;
  transition: 300ms;
  margin-bottom: 20px;
}
button:hover {
  background: #274546;
  cursor: pointer;
}
button.g-btn--block {
  width: 100%;
}
</style>