import BusMessage from "@/Bus/Application/Message/BusMessage";

export default abstract class Query extends BusMessage {
  public abstract get queryName(): string;
}
