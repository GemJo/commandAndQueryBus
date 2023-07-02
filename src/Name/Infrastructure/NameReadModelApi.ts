import type NameReadModel from "@/Name/Application/NameReadModel";
import { useNameStore } from "@/stores/name";

export default class NameReadModelApi implements NameReadModel {
  retrieve(): string {
    return useNameStore().getName();
  }
}
