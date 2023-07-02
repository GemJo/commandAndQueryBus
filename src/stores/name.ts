import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNameStore = defineStore('name',() => {
  const name = ref<string>('');
  const setName = (value: string) => {
    name.value = value;
  }
  const getName = (): string => {
    const copyName = name.value;
    name.value = '';
    return copyName;
  }
  return { name, setName, getName };
})
