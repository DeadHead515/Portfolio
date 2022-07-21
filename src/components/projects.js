import { Card, Row, Col, Container, Button } from "react-bootstrap";
import React from "react";
import Ewok from '../media/Ewok.png';
import Towers from '../media/towers.png';

export const Projects= () => {
    const projectlist = [{title: 'Custom Decks', img: {Ewok}, description: 'Website for construction company'}, 
    {title: 'Towers of Hano', img: {Ewok}, description: 'Text based game'}];
    // projectList.map()
    return (
        
            <Container id="projects" className='projects-div'>
                <Col lg={4} >
                    <Card className='projects'>
                        <Card.Img variant="top" src={Ewok} />
                        <Card.Body>
                            <Card.Title>{projectlist[0].title}</Card.Title>
                            <Card.Text>
                                {projectlist[0].description}
                            </Card.Text>
                            <Card.Link href="http://customdecksllc.com/">Website</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='projects'>
                        <Card.Img variant="top" src={Towers}/>
                        <Card.Body>
                            <Card.Title>{projectlist[1].title}</Card.Title>
                            <Card.Text>
                                {projectlist[1].description}
                            </Card.Text>
                            <Card.Link href="#">Code Base</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        );
    
}

