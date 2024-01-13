
import { fetchGeo } from "@/apis/openweathermapApi";
import { useWeatherStore } from "@/store/weatherStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


export const useLocation = () => {

  const { setLocation, lat, lon, setPlace } = useWeatherStore();

  const location = useQuery(
    ['location', lat, lon],
    () => fetchGeo(lat, lon),
    {
      enabled: !!lat && !!lon,
      onSuccess: setPlace
    }
  );

  useEffect(() => {
    if (!lat && !lon) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLocation(position.coords.latitude, position.coords.longitude);
        }, 
        function (error) {
          // Hanoi added by default
          setLocation(21.0294498, 105.8544441);
        }
      );
    }
  }, []);

  return location;
}
