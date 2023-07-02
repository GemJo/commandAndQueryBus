import GetNameQuery from '@/Name/Application/Query/GetName/GetNameQuery';
import type QueryHandler from "@/Bus/Application/QueryHandler";
import { type ResponseQuery } from "@/Bus/Domain/ResponseQuery";
import type NameReadModel from "@/Name/Application/NameReadModel";

export default class GetNameQueryHandler implements QueryHandler {
  private readonly nameReadModel: NameReadModel;

  constructor(nameReadModel: NameReadModel) {
    this.nameReadModel = nameReadModel;
  }

  public async invoke(query: GetNameQuery)
    : Promise<ResponseQuery<'name', string>> {
    try {
      const name = this.nameReadModel.retrieve();
      return { success: true, name };
    } catch (e: Error) {
      return { success: false, error: e.name || '' };
    }
  }
} 