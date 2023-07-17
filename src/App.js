
import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

function App() {
  const google = window.google;

  const [query,setQuery]=useState(" ");

  function handleSearch(query){
    setQuery(query);
  }
  return (
    <div className='main'>
    <Header onSearch={handleSearch}  />
    {/* onPlaceChanged={onPlaceChanged} onLoad={onLoad} */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 list-container">
          <List
            // isLoading={isLoading}
            // childClicked={childClicked}
            // places={filteredPlaces.length ? filteredPlaces : places}
            // type={type}
            // setType={setType}
            // rating={rating}
            // setRating={setRating}
          />
        </div>
        <div className="col-md-8">
        <div className="map-container">
          <div className="google-map">
          <Map location={query}
            // setChildClicked={setChildClicked}
            // setBounds={setBounds}
            // setCoords={setCoords}
            // coords={coords}
            // places={filteredPlaces.length ? filteredPlaces : places}
            // weatherData={weatherData}
             google={google}
          />
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  );
}

export default App;
