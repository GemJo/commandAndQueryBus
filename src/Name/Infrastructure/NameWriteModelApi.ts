import type NameWriteModel from "@/Name/Application/NameWriteModel";
import { useNameStore } from "@/stores/name";

export default class NameWriteModelApi implements NameWriteModel {
  save(name: string): void {
    useNameStore().setName(name);
  }

}
