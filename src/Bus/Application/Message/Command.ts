import BusMessage from "@/Bus/Application/Message/BusMessage";

export default abstract class Command extends BusMessage {
  public abstract get commandName(): string;
}
