import React, { useEffect, useRef } from 'react';

const Map = ({ apiKey }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    window.initMap = () => {
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCCj7ac4-Bxa9ILiW4DgfjSxxX8NgKeiHw&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default Map;
