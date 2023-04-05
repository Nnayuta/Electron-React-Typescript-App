import { PrismaClient as PrismaCspdv } from "../../../prisma/generated/cspdv";
import { PrismaClient as PrismaStore } from "../../../prisma/generated/store";

const storeApi = new PrismaStore();
const cspdvApi = new PrismaCspdv();

export { storeApi, cspdvApi };
