import Command from "@/Bus/Application/Message/Command";
import { type ResponseCommand } from "@/Bus/Domain/ResponseCommand";

export default interface CommandHandler {
  invoke(command: Command): Promise<ResponseCommand>;
}