import { useState, useEffect, useRef } from 'react';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const Homes = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const ref = useRef();

  useEffect(() => {
    const newMap = new window.google.maps.Map(ref.current, {
      center: { lat: 37.569227, lng: 126.9777256 },
      zoom: 16,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }], // 관심 장소(POI) 숨김
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }], // 대중교통 라벨 숨김
        },
      ],
    });

    setMap(newMap);
  }, []);

  useEffect(() => {
    if (map) {
      const locations = [
        {
          position: { lat: 37.569227, lng: 126.9777256 },
          content: `
          <div style="display: flex; flex-direction: column; align-items: center; padding: 10px; font-family: Arial, sans-serif;">
            <img src="https://memoraize-bucket.s3.ap-northeast-2.amazonaws.com/albums/photos/1e778335-328e-470b-a43b-906403c3038d" alt="image1" style="width: 100%; max-width: 200px; height: auto; border-radius: 10px; margin-bottom: 10px;" />
            <h3 style="margin: 0; font-size: 16px;">사진 제목 1</h3>
          </div>
        `,
        },
        {
          position: { lat: 37.571032, lng: 126.97712 },
          content: `
          <div style="display: flex; flex-direction: column; align-items: center; padding: 10px; font-family: Arial, sans-serif;">
            <img src="https://memoraize-bucket.s3.ap-northeast-2.amazonaws.com/albums/photos/9e182534-b6cd-4693-8695-a04791bac261" alt="image1" style="width: 100%; max-width: 200px; height: auto; border-radius: 10px; margin-bottom: 10px;" />
            <h3 style="margin: 0; font-size: 16px;">사진 제목 2</h3>
          </div>
        `,
        },
        {
          position: { lat: 37.570173, lng: 126.979688 },
          content: `
          <div style="display: flex; flex-direction: column; align-items: center; padding: 10px; font-family: Arial, sans-serif;">
            <img src="https://memoraize-bucket.s3.ap-northeast-2.amazonaws.com/albums/photos/de2256f2-262f-4f6b-9b18-5b0e2a1a1c1b" alt="image1" style="width: 100%; max-width: 200px; height: auto; border-radius: 10px; margin-bottom: 10px;" />
            <h3 style="margin: 0; font-size: 16px;">사진 제목 3</h3>
          </div>
        `,
        },
      ];

      const bounds = new window.google.maps.LatLngBounds();

      // const markerIcon = {
      //   url: markerImage, // 마커 아이콘 이미지 URL
      //   scaledSize: new window.google.maps.Size(50, 50), // 마커 크기 지정
      //   size: new window.google.maps.Size(50, 50), // 원본 이미지 크기
      //   origin: new window.google.maps.Point(0, 0), // 이미지의 시작점
      //   anchor: new window.google.maps.Point(25, 25) // 앵커 포인트 설정 (마커의 중심을 기준으로)
      // };

      const newMarkers = locations.map((location) => {
        bounds.extend(location.position);
        const marker = new window.google.maps.Marker({
          position: location.position,
          // icon: markerIcon,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: location.content,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        return marker;
      });

      setMarkers(newMarkers);

      // Ensure fitBounds is called after all markers are set
      map.fitBounds(bounds);

      // Set up marker clustering
      new MarkerClusterer({ markers: newMarkers, map });

      const polylinePath = locations.map((location) => location.position);
      const polyline = new window.google.maps.Polyline({
        path: polylinePath,
        geodesic: true,
        strokeColor: '#FF6347',
        strokeOpacity: 0.9,
        strokeWeight: 10,
        icons: [
          {
            icon: {
              path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
              scale: 6,
              strokeColor: '#FF6347',
            },
            offset: '100%',
          },
        ],
      });

      polyline.setMap(map);
    }
  }, [map]);

  return (
    <div
      ref={ref}
      id="map"
      style={{ width: '60vw', height: '23.6vw', borderRadius: '15px' }}
    ></div>
  );
};

export default Homes;
