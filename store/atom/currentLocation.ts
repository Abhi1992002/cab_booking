import { currentLocationType } from "@/types";
import { atom } from "recoil";

export const currentLocationState = atom({
  key: "currentLocationState", // unique ID (with respect to other atoms/selectors)
  default: {} as currentLocationType, // default value (aka initial value)
});
