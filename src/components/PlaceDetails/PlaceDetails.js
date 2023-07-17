import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FolderPlus } from 'react-bootstrap-icons';

export default function PlaceDetails({ place }) {
  return (
    <Card>
      <Card.Img variant="top" style={{ height: 350 }} src={place.photo} alt={place.name} />
      <Card.Body>
        <Card.Title>{place.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="info" className="float-right">
          <FolderPlus />
        </Button>
      </Card.Footer>
    </Card>
  );
}

