import { atom } from "recoil";

export const expectedDistanceState = atom({
  key: "expectedDistanceState",
  default: null! as number,
});
