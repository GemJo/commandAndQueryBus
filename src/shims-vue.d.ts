import { QueryHook, CommandHook } from "@/Bus/Infrastructure/BusHook";

declare module 'vue/types/vue' {
  interface Vue {
    $commandBus: CommandHook,
    $queryBus: QueryHook,
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $commandBus: CommandHook,
    $queryBus: QueryHook,
  }
}

declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}