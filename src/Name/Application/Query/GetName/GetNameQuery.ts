import Query from "@/Bus/Application/Message/Query";

export default class GetNameQuery extends Query {
  public get queryName(): string {
    return 'GetNameQuery';
  }

  public get namespace(): string {
    return 'Name';
  }
}