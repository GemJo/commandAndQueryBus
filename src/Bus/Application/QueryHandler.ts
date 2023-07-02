import Query from "@/Bus/Application/Message/Query";
import { type ResponseQuery } from "@/Bus/Domain/ResponseQuery";

export default interface QueryHandler {
  invoke(query: Query): Promise<ResponseQuery<any, unknown>>
}