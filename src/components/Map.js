import React,{ useEffect } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./map.css"

const MapContainer = ({ location, zoomLevel, google }) => {
  const coordinates = { lat: 28.6139, lng: 77.2090 };
  useEffect(() => {
    // Fetch data or perform side effects here
  }, [location, zoomLevel]);

  return (
    <div>
      <div className="map d-flex   ">
        <div className="google-map ">
          <Map
            google={google}
            defaultCenter={coordinates || location}
            center={coordinates}
            defaultZoom={14 || zoomLevel}
            // margin={[50,50,50,50]}
            options={" "}
            onChange={" "}
            onChildClick={" "}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCa0jx7GbFOCjXHl9qXI_uWjLZiwJhTDqk',
})(MapContainer);
