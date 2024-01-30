import { currentLocationType } from "@/types";
import { atom } from "recoil";

export const pickingCoordinatesState = atom({
  key: "pickingCoordinatesState",
  default: null! as currentLocationType,
});
