declare module 'vue/types/vue' {
  interface Vue {}
}

/*declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}*/

declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}