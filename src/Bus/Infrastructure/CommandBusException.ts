export default class CommandBusException extends Error {
  public name: string;

  constructor() {
    super(`Command Bus not found`);
    this.name = 'CommandBusException';
  }
}