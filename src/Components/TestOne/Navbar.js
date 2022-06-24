import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
const FullLayout = () => {
    return (
        <div className='BgColor'>  
          <Container>
          <div className=' pt-5 pb-5 '>
             <Link to='/Layout1'><Button className='LayoutStyle' variant="secondary">LAYOUT 1</Button></Link>
             <Link to='/Layout2'><Button className='LayoutStyle' variant="secondary">LAYOUT 2</Button></Link>
             <Link to='/Layout3'><Button className='LayoutStyle' variant="secondary">LAYOUT 3</Button></Link>
              
          </div>
          </Container>
            
        </div>
    );
};

export default FullLayout;