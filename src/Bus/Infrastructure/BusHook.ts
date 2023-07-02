import CommandBus from "@/Bus/Infrastructure/CommandBus";
import Command from "@/Bus/Application/Message/Command";
import { type ResponseCommand } from "@/Bus/Domain/ResponseCommand";
import Query from "@/Bus/Application/Message/Query";
import { type ResponseQuery} from "@/Bus/Domain/ResponseQuery";
import QueryBus from "@/Bus/Infrastructure/QueryBus";


export type CommandHook = (command: Command) => Promise<ResponseCommand>;
export type QueryHook = (query: Query) => Promise<ResponseQuery<any, unknown>>;
export default class BusHook {
  private commandBus: CommandBus;

  private queryBus: QueryBus;

  constructor() {
    this.commandBus = new CommandBus();
    this.queryBus = new QueryBus();
  }

  public getCommandProperty(): CommandHook {
    return async (command: Command): Promise<ResponseCommand> => this.commandBus.execute(command);
  }

  public getQueryProperty(): QueryHook {
    return async (query: Query): Promise<ResponseQuery<string, unknown>> => this.queryBus.execute(query);
  }
}
