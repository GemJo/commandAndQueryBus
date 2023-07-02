export default class QueryBusException extends Error {
  public name: string;

  constructor() {
    super(`Query Bus not found`);
    this.name = 'QueryBusException';
  }
}