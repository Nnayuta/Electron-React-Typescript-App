import Store = require("electron-store");

export interface IConfig {
  DB_URL_PDV: string;
  DB_URL_STORE: string;
  DB_LOCAL: string;
  PDV_password: string;
  PDV_username: string;
  currentPage: string;
  backToThePageAfterClosing: boolean;
}

export const configStore = new Store<IConfig>({
  defaults: {
    DB_LOCAL: "",
    DB_URL_PDV: "http://g300603svbbj:9003/api/v1/pdv/baseIps",
    DB_URL_STORE: "http://g300603svbbj:9003/api/v1/pdv/baseLojas",
    PDV_username: "root",
    PDV_password: "emporium",
    currentPage: "Automation",
    backToThePageAfterClosing: true,
  },
});
