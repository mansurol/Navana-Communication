import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import './LayoutPartOne.css'
import Button from 'react-bootstrap/esm/Button';
const LayoutPartOne = (props) => {
    const {Title,Time,Content,Money} = props.data
    return (
        <div>
            <Container>
            <Card className='BgColor2 mb-3 mt-3'>
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

export default LayoutPartOne;