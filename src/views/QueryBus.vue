<template>
  <div class="text-center">
    <g-button
      block
      @click="getName()"
    >
      get name
    </g-button>
    <p v-if="error" class="error-message">An error was occurred.</p>
    <p v-else-if="name === null">Click the button to get name</p>
    <p v-else-if="name === ''">The name has not been saved yet. <RouterLink to="/command">Go to command</RouterLink></p>
    <p v-else>Name is: <strong>{{ name }}</strong></p>
  </div>
</template>

<script setup lang="ts">
import GetNameQuery from "@/Name/Application/Query/GetName/GetNameQuery";
import GButton from "@/Misc/Infratructure/Components/Buttons/GButton.vue";

import { getCurrentInstance, ref } from "vue";
import { type ComponentInternalInstance, type ComponentPublicInstance} from "@vue/runtime-core";

const componentInternal: ComponentInternalInstance | null = getCurrentInstance();
const componentPublic: ComponentPublicInstance | null = componentInternal?.proxy ||  null;

const name = ref<string | null>(null);
const error = ref<boolean>(false);
const getName = async () => {
  error.value = false;
  const response = await componentPublic.$queryBus(new GetNameQuery()) ;

  if (!response.success) {
    console.log(e);
    error.value = true;
    return;
  }

  name.value = response.name as string;
}
</script>

<style scoped>
.error-message {
  color: crimson;
}
p strong {
  font-weight: bold;
}
</style>