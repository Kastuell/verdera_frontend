"use client"

import { Map, YMaps } from "@pbe/react-yandex-maps";

export const YaMap = () => (
  <YMaps>
    <div>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps>
);
