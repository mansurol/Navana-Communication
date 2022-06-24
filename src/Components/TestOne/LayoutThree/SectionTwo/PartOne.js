import React from 'react';
import './PartOne.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
const PartOne = (props) => {

    const {Title,Time,Content,Money} = props.Profile
    return (
        <div>
             <Container>
            <Card className=' mt-3 BackgoundColor' >
            <Card.Body>
    <Card.Title>{Title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{Time}</Card.Subtitle>
    <Card.Text>
      {Content}
    </Card.Text>
    <Card.Text>
      {Money}
    </Card.Text>
    <Button variant="outline-success">Enroll</Button>
     </Card.Body>            
  </Card>
            </Container>
            
            
        </div>
    );
};

export default PartOne;