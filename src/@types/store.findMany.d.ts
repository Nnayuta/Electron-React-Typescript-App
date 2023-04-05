import {
  CHANNEL,
  FLAG,
  REGION,
  STORE,
  SUPPORT,
  SUPPORT_LEADER,
  TYPE,
} from "../../prisma/generated/store";

export interface storefindManyType extends STORE {
  CHANNEL: CHANNEL;
  FLAG: FLAG;
  REGION: REGION;
  SUPPORT: SUPPORT;
  SUPPORT_LEADER: SUPPORT_LEADER;
  TYPE: TYPE;
}
