import { Container, Row } from "react-bootstrap"
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Footer = () =>{
    let email = 'kristopher.j.jurgens@gmail.com';
    let subject = 'Profile Website';
    // document.write('<a href="mailto:' + email + '?subject=' +subject+ '&body=' +body+ '">' + 'Click here to send email as well' + '<'+'/a>');
    let messageEmail = 'Sorry this is currently not set up right now. Please send an email to kristopher.j.jurgens@gmail.com if you would like to talk.'
    let messageLinkedIn = 'Sorry this is currently not set up right now. Please search for Kristopher Jurgens on linkedIn if you would like to talk.'
    let messageGitHub = 'Sorry this is currently not set up right now. Please search for Deadhead515 on github if you would like to talk.'

    const githubLink = 'https://github.com/DeadHead515';
    const link = "mailto:kristopher.j.jurgens@gmail.com?subject=Getting in touch";
    const linkedInLink = 'https://www.linkedin.com/in/kristopher-jurgens-601364232/'  
    

    return (
        <Container style={{color: 'white'}} >
            <Row style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', lineHeight:'40px'}}>
                Contact Me
            </Row>
            <div style={{display: 'flex',flexDirection: 'row', justifyContent:'space-evenly'}}>
            <div style={{display:'flex', flexDirection: 'column' , alignItems: 'center'}}>
                <IconButton onClick={event => {window.location.href = link}} sx={{color: 'white'}} aria-label="email" component="span">
                    <EmailIcon/>
                </IconButton>
                <p>Email</p>
            </div>
            <div style={{display:'flex', flexDirection: 'column' , alignItems: 'center'}}>
                <IconButton onClick={event => {window.location.href = linkedInLink}} sx={{color: 'white'}} aria-label="email" component="span">
                    <LinkedInIcon/>
                </IconButton>
                <p>Linked In</p>
            </div>
            <div style={{display:'flex', flexDirection: 'column' , alignItems: 'center'}}>
                <IconButton onClick={ event => {window.location.href = githubLink;}} sx={{color: 'white'}} aria-label="email" component="span">
                    <GitHubIcon/>
                </IconButton>
                <p>GitHub</p></div>
            </div>
              
        </Container>
    )
}