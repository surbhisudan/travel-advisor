import React, { useState } from 'react';
import { Spinner, Row, Col, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

import PlaceDetails from "./PlaceDetails/PlaceDetails"

const List = () => {
  const [type,setType] = useState("resturants");
  const [rating,setRating]=useState(" ")

  // useEffect(() => {
  //   setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  // }, [places]);
  const places= [
    {name:"place 1",photo:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 2",photo:"https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 3",photo:"https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 4",photo:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 4",photo:"https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 5",photo:"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name:"place 1",photo:"https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 2",photo:"https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 3",photo:"https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 4",photo:"https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 4",photo:"https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 5",photo:"https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 1",photo:"https://images.pexels.com/photos/2291603/pexels-photo-2291603.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 2",photo:"https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 3",photo:"https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 4",photo:"https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 4",photo:"https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name:"place 5",photo:"https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 1",photo:"https://images.pexels.com/photos/6141651/pexels-photo-6141651.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 2",photo:"https://images.pexels.com/photos/5865152/pexels-photo-5865152.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name:"place 3",photo:"https://images.pexels.com/photos/2755/restaurant.jpg?auto=compress&cs=tinysrgb&w=600"},
  ]
  return (
    <div className="container">
      <h3>Resturants,Hotels and Attractions around you!</h3>
      {/* {isLoading ? ( */}
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Spinner animation="border" variant="primary" size="lg" />
        </div>
      {/* ) : ( */}
        <>
          <Form className="mb-3">
            <FormGroup>
              <FormLabel>Type</FormLabel>
              <FormControl as="select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>Rating</FormLabel>
              <FormControl as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="">All</option>
                <option value="3">Above 3.0</option>
                <option value="4">Above 4.0</option>
                <option value="4.5">Above 4.5</option>
              </FormControl>
            </FormGroup>
          </Form>
          <Row>
            {places?.map((place, i) => (
              <Col key={i} xs={12}>
                <PlaceDetails place={place} />
              </Col>
            ))}
          </Row>
        </>
      {/* )} */}
    </div>
  );
};

export default List;
