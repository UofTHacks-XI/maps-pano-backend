/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initialize() {
  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const lat: number = Number(params.get("lat"));
  const lng: number = Number(params.get("lng"));
  
  console.log(lat, lng);
  
  let panorama: google.maps.StreetViewPanorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view") as HTMLElement,
    {
      // position: { lat: 43.89177, lng: -79.3085867 },
      position: { lat: lat, lng: lng },
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
      motionTracking: true
    }
  );
}

declare global {
  interface Window {
    initialize: () => void;
  }
}
window.initialize = initialize;
export {};
