import Nav from 'react-bootstrap/Nav';
import React from 'react';


export class Navbar extends React.Component {
    render(){
        return (
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                <Nav.Link style={{color: 'white', fontWeight:'bolder'}} href="#about-me">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color: 'white', fontWeight:'bolder'}} href="#projects" eventKey="#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color: 'white', fontWeight:'bolder'}} href="#skills" eventKey="#skills">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color: 'white', fontWeight:'bolder'}} href="#interests" eventKey="#interests">Interests</Nav.Link>
                </Nav.Item>
            </Nav>
        )

        };
}