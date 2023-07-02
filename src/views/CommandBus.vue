<template>
  <div>
    <g-input-text
      ref="input"
      v-model="name"
      label="Name"
      :readonly="nameWasSaved"
      :rules="[requiredInput]"
    />
    <g-button
      block
      @click="executeCommand"
    >
      Save
    </g-button>
    <div class="text-center">
      <RouterLink v-if="nameWasSaved" to="/query">Go to query</RouterLink>
      <p v-if="error" class="error-message">An error was occurred.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SaveNameCommand from "@/Name/Application/Command/SaveName/SaveNameCommand";
import GButton from "@/Misc/Infratructure/Components/Buttons/GButton.vue";
import GInputText from "@/Misc/Infratructure/Components/Inputs/GInputText.vue";

import { getCurrentInstance, ref } from "vue";
import { type ComponentInternalInstance, type ComponentPublicInstance } from "@vue/runtime-core";

const componentInternal: ComponentInternalInstance | null = getCurrentInstance();
const componentPublic: ComponentPublicInstance | null = componentInternal?.proxy ||  null;

const input = ref<InstanceType<GInputText>>(null);
const name = ref<string>('');
const nameWasSaved = ref<boolean>(false);
const error = ref<boolean>(false)
const requiredInput = (value: string) => !!value || 'Name is required';
const executeCommand = async () => {
  if (!input.value.validate()) {
    return;
  }

  const response = await componentPublic.$commandBus(new SaveNameCommand(name.value));

  if (!response.success) {
    error.value = true;
    return;
  }

  nameWasSaved.value = true;
}
</script>

<style scoped>
.error-message {
  color: crimson;
}
</style>