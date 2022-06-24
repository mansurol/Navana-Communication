import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import LayoutOneData from '../FakeData/LayoutOneData'
import './LayoutOne.css'
import LayoutPartOne from './LayoutPartOne';
const LayoutOne = () => {
    const [LayoutDatas , SetLayoutdata] = useState(LayoutOneData)
    return (
        <div>
            <Container>
                <div>
                    {
                        LayoutDatas.map((Data)=> <LayoutPartOne data={Data}/>)
                    
                    }
                </div>
   
            </Container>
        </div>
    );
};

export default LayoutOne;