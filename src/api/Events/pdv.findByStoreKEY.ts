import { EventModel } from "../Model/Events.model";
import csv from "convert-csv-to-json";
import ping from "ping";

// eslint-disable-next-line import/no-unresolved
import { IPDV } from "../../@types/pdv";
import { getPath } from "../utils/path";

export default new EventModel({
  EVENT_NAME: "pdv:findByStoreKEY",
  execute: async (id: string) => {
    try {
      const filePath = getPath({
        resourcesPath: "./baseIps.txt",
        developmentPath: "./prisma/baseIps.txt",
      });

      const data: IPDV[] = await csv.getJsonFromCsv(filePath);

      const findByStoreID = data.filter(
        (pdv) => pdv.STORE_KEY == id.toString().padStart(4, "0")
      );

      for (const pdv of findByStoreID) {
        const pingResult = await ping.promise.probe(pdv.POS_IP, {
          timeout: 5,
        });

        pdv.Ping = pingResult;
      }

      return findByStoreID;
    } catch (error) {
      throw error.toString();
    }
  },
});
