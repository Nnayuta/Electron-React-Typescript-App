import { Pages, PermLevel } from "@prismaGenerated/cspdv";

export interface PageWithPermLevel extends Pages {
  PermLevel: PermLevel[];
}
