export enum carType {
  ECONOMY = "ECONOMY",
  MINIVAN = "MINIVAN",
  COMFORT = "COMFORT",
  LUXURY = "LUXURY",
  ELECTRIC = "ELECTRIC",
}

export enum cardType {
  MASTERCARD = "MASTERCARD",
  VISA = "VISA",
  APPLEPAY = "COMFORT",
  GOOGLEPAY = "LUXURY",
  CASH = "CASH",
}

export type addressList = {
  suggestions: {
    full_address: string;
    mapbox_id: string;
  }[];
};

export type currentLocationType = {
  lat: number;
  long: number;
};
