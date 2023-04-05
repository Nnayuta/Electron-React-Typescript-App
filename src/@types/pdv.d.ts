import { PingResponse } from "ping";

export interface IPDV {
  STORE_KEY: string;
  POS_NUMBER: string;
  POS_NAME: string;
  POS_IP: string;
  POS_VERSION: string;
  ECF_MODEL: string;
  ECF_MANUFACTURER: string;
  ECF_SERIAL: string;
  Ping?: PingResponse;
}
