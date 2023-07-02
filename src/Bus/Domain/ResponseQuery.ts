export type ResponseQuery<P extends string, T> = {
  success: boolean,
  error?: string,
} & { [Property in P]?: T }
