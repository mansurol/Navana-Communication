import React from 'react';
import './LayoutTwoPartOne.css'
import Card from 'react-bootstrap/Card'
const LayoutTwoPartOne = (props) => {
    const {Title,Time,Content,Money} = props.LayoutAllCourse
    return (
        <div>
       
       <div  >
       <Card className='BgColor2'>
  <Card.Header>{Title}</Card.Header>
  <Card.Body>
    <Card.Title> {Time} </Card.Title>
    <Card.Text> {Content}</Card.Text>
    <Card.Text> {Money}</Card.Text>
  </Card.Body>
</Card>
</div>
       
    </div>
    );
};

export default LayoutTwoPartOne;