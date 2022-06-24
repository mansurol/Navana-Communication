import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionOne.css'
import LayoutThreeAllData from '../../FakeData/LayoutThreeAllData'
import LayoutThreePartOne from './LayoutThreePartOne';

const SectionOne = () => {
    const [ThreeData , setThreeData] =useState(LayoutThreeAllData)
    return (
        <div>
       
          <Container>
          {
          ThreeData.map((LayoutThreedata)=> <LayoutThreePartOne LayoutThreedatas={LayoutThreedata}/>)
         }          
      
      </Container>
        
        </div>
    );
};

export default SectionOne;