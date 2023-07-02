<template>
  <div class="g-group-input g-input">
    <input
      :value="modelValue"
      :type="type || 'text'"
      :id="inputId"
      :placeholder="placeholder || label"
      :readonly="readonly"
      @input="$emit('update:modelValue', $event.target.value)"
      @focusout="getFirstErrorMessage()"
    />
    <label
        v-if="label"
        :for="inputId"
    >
      {{ label }}
    </label>
    <p class="g-input__message--error">
      <span v-if="errorMessage !== true">{{ errorMessage }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
interface Props {
  modelValue: string,
  label?: string,
  placeholder?: string,
  type?: string,
  readonly?: boolean,
  rules?: ((value: string) => boolean | string)[],
}
const props = defineProps<Props>();

function getRandomNumber() {
  return Math.floor(Math.random() * (999 - 100) + 100);
}
let inputId = ref<string>(`input${getRandomNumber()}`);

function initInputId() {
  const inputs: HTMLInputElement[] = Array.from(document.getElementsByTagName('input'));
  if (!inputs.length) {
    return;
  }

  if (!inputs.some((input) => input.id === inputId.value)) {
    return;
  }

  inputId.value = `input${getRandomNumber()}`;
  initInputId();
}
onMounted(() => {
  initInputId();
});

const errorMessage = ref<string | boolean>(true);
function getFirstErrorMessage() {
  errorMessage.value = true;
  if (!props.rules) {
    return true;
  }

  props.rules.forEach((rule) => {
    if (errorMessage.value !== true) {
      return;
    }

    errorMessage.value = rule(props.modelValue);
  })

  return errorMessage.value;
}
function validate(): boolean {
  return getFirstErrorMessage() === true;
}

defineExpose({ validate })
</script>

<style scoped>
.g-group-input {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
  margin-bottom: 20px;
}

.g-group-input input {
  width: 100%;
  border: 1.5px solid #72a2a3;
  border-radius: 10px;
  outline: 0;
  font-size: 1rem;
  color: #282828;
  padding: 10px;
  background: transparent;
  transition: border-color 0.2s;
}


.g-group-input input::placeholder {
  color: transparent;
}

.g-group-input input:placeholder-shown ~ label {
  font-size: 1.1rem;
  cursor: text;
  top: 25px;
  left: 15px;
}

.g-group-input label {
  position: absolute;
  top: 6px;
  display: block;
  background: white;
  transition: 0.2s;
  font-size: 0.8rem;
  left: 11px;
  padding: 0 4px;
  color: #4f8b8c;
}

.g-group-input input:focus ~ label {
  position: absolute;
  top: 6px;
  background: white;
  padding: 0 4px;
  left: 11px;
  display: block;
  transition: 0.2s;
  font-size: 0.8rem;
  color: #4f8b8c;
}

.g-input__message--error {
  padding-left: 10px;
  padding-top: 4px;
  min-height: 17.5px;
  font-size: 0.75rem;
  color: crimson;
}
/* reset input */
input:required, input:invalid { box-shadow:none; }
</style>