import { carType } from "@prisma/client";

export const cars = [
  {
    value: carType.ECONOMY,
    "aria-label": carType.ECONOMY,
    charges: 1,
    name: "Economy",
    img: "/car/1.png",
  },
  {
    value: carType.MINIVAN,
    "aria-label": carType.MINIVAN,
    charges: 1.2,
    name: "Mini Van",
    img: "/car/2.png",
  },
  {
    value: carType.COMFORT,
    "aria-label": carType.COMFORT,
    charges: 1.5,
    name: "Comfort",
    img: "/car/3.png",
  },
  {
    value: carType.LUXURY,
    "aria-label": carType.LUXURY,
    charges: 2,
    name: "Luxury",
    img: "/car/4.png",
  },
  {
    value: carType.ELECTRIC,
    "aria-label": carType.ELECTRIC,
    charges: 2.3,
    name: "Luxury",
    img: "/car/5.png",
  },
];
