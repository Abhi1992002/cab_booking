import { currentLocationType } from "@/types";
import { atom } from "recoil";

export const destinationCoordinatesState = atom({
  key: "destinationCoordinateState",
  default: null! as currentLocationType,
});
