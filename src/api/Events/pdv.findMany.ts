import { EventModel } from "../Model/Events.model";

import csv from "convert-csv-to-json";

// eslint-disable-next-line import/no-unresolved
import { IPDV } from "../../@types/pdv";
import { getPath } from "../utils/path";

export default new EventModel({
  EVENT_NAME: "pdv:findMany",
  execute: async () => {
    try {
      const filePath = getPath({
        resourcesPath: "./baseIps.txt",
        developmentPath: "./prisma/baseIps.txt",
      });

      const data: IPDV[] = await csv.getJsonFromCsv(filePath);
      return data;
    } catch (error) {
      throw error.toString();
    }
  },
});
