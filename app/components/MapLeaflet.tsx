"use client";

import { useEffect, useRef } from "react";

export default function MapLeaflet() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any = null;
    let L: any = null;

    async function init() {
      L = await import("leaflet");

      // set default icon urls
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      if (!mapRef.current) return;

      map = L.map(mapRef.current).setView([7.3697, 12.3547], 6);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      const markers = [
        { pos: [4.0511, 9.7679], label: "Douala" },
        { pos: [3.8480, 11.5021], label: "Yaoundé" },
        { pos: [5.9585, 10.1415], label: "Bamenda" },
        { pos: [5.4770, 10.4170], label: "Bafoussam" },
      ];

      markers.forEach((m) => {
        L.marker(m.pos).addTo(map).bindPopup(m.label);
      });
    }

    init();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div ref={mapRef} className="h-full w-full rounded-2xl" style={{ height:  '100%', minHeight:  '300px' }} />;
}
