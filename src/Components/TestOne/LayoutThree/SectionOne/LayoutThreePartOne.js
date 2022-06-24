import React from 'react';
import './LayoutThreePartOne.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const LayoutThreePartOne = (props) => {
    const {Title,Time,Content,Money} = props.LayoutThreedatas
    return (
        
        <div>
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
        </div>
    );
};

export default LayoutThreePartOne;