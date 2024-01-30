import { atom } from "recoil";

export const expectedTimeState = atom({
  key: "expectedTimeState",
  default: null! as number,
});
