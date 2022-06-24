import React, { useState } from 'react';
import DataTwo from '../FakeData/LayoutOneData'
import LayoutTwoPartOne from './LayoutTwoPartOne';
import Container from 'react-bootstrap/esm/Container';

import './LayoutTwo.css'
const LayoutTwo = () => {
  const [LayoutTwodata , setLayouttwoData] =useState(DataTwo)
  return (
    <Container>
    <div className="friend-container mt-5 pb-3">
      {
          LayoutTwodata.map((LayoutTwodata)=> <LayoutTwoPartOne LayoutAllCourse={LayoutTwodata}/>)
      }
      </div>
      </Container>
  );
};

export default LayoutTwo;