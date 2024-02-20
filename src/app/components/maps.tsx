import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px',
};

const center = {
  lat: 21.50951,
  lng: -104.89569
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB6x0OHPqiQSYjtd_x1AT8PyG6G0rZ4iSk"
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null); // Explicitly specify the type as google.maps.Map | null

  const onLoad = React.useCallback(function callback(map: google.maps.Map) { // Explicitly specify the type as google.maps.Map
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      
      <Marker position={center} />
    </GoogleMap>
  ) : <></>;
}

export default React.memo(Maps);