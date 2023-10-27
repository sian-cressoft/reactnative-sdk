import type { DigioError } from './error';

export interface Payload {
  type?: string;
  data?: { [key: string]: any };
  error?: DigioError;
}

export interface GatewayEvent {
  documentId?: string;
  txnId?: string;
  entity?: string;
  identifier?: string;
  event?: string;
  payload?: Payload;
}
