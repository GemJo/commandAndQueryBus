import Query from "@/Bus/Application/Message/Query";
import { type ResponseQuery } from "@/Bus/Domain/ResponseQuery";
import type QueryHandler from "@/Bus/Application/QueryHandler";
import QueryBusException from "@/Bus/Infrastructure/QueryBusException";

export default class QueryBus {
  public async execute(query: Query): Promise<ResponseQuery<string, unknown>> {
    try {
      const handlers = await import(`../../${query.namespace}/Infrastructure/Application/index.ts`);
      const queryHandler: QueryHandler = handlers[`${this.getNameHandler(query.queryName)}Handler`]();

      return queryHandler.invoke(query);
    } catch (e) {
      console.error(e);
      return { success: false, error: (new QueryBusException()).name };
    }
  }

  private getNameHandler(name: string): string {
    return `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
  }
}
