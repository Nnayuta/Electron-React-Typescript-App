/* eslint-disable import/no-unresolved */
import { createSlice } from "@reduxjs/toolkit";
import { IPDV } from "../@types/pdv";

const initialState: IPDV = {
  STORE_KEY: "",
  POS_NUMBER: "",
  POS_NAME: "",
  POS_IP: "",
  POS_VERSION: "",
  ECF_MODEL: "",
  ECF_MANUFACTURER: "",
  ECF_SERIAL: "",
};

export const slice = createSlice({
  name: "pdv",
  initialState,
  reducers: {
    set(_state, { payload }: { payload: IPDV }) {
      return { ...payload };
    },
  },
});

export const { set } = slice.actions;
export const pdv = (state: { pdv: IPDV }) => state.pdv;
export default slice.reducer;
