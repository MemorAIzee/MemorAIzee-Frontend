import React, { useEffect, useRef } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // 지도 초기화 함수
    const initMap = () => {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    // Google Maps 스크립트가 이미 로드되었는지 확인
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Google Maps 스크립트 로드
      window.initMap = initMap; // 전역 함수로 설정
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        window.initMap = undefined; // 콜백 참조 제거
        document.body.removeChild(script);
      };
    }
  }, []);

  return <div ref={mapRef} style={{ width: '500px', height: '500px' }} />;
}

export default Map;
