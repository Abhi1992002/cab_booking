import { atom } from "recoil";

export const amountState = atom({
  key: "AmountState",
  default: null! as number,
});
