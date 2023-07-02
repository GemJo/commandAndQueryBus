import Command from "@/Bus/Application/Message/Command";
import { type ResponseCommand } from "@/Bus/Domain/ResponseCommand";
import type CommandHandler from "@/Bus/Application/CommandHandler";
import CommandBusException from "@/Bus/Infrastructure/CommandBusException";

export default class CommandBus {
  public async execute(command: Command): Promise<ResponseCommand> {
    try {
      const handlers = await import(`../../${command.namespace}/Infrastructure/Application/index.ts`);
      const commandHandler: CommandHandler = handlers[`${this.getNameHandler(command.commandName)}Handler`]();
      return commandHandler.invoke(command);
    } catch (e) {
      return { success: false, error: (new CommandBusException()).name };
    }
  }

  private getNameHandler(name: string): string {
    return `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
  }
}
