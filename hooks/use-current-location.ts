import { currentLocationState } from "@/store/atom/currentLocation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useRecoilState(
    currentLocationState
  );

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentLocation({
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
      });
    });
  };
  useEffect(() => {
    getLocation();
  }, [currentLocation]);

  return currentLocation;
};
