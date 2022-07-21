import { Container, Row } from "react-bootstrap";
import HikingIcon from '@mui/icons-material/Hiking';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PhishingIcon from '@mui/icons-material/Phishing';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

export const Interests= () => {
    return(
            <Container id='interests' style={{marginTop: '20px', marginBottom:'20px'}}>
                <Row style={{  display: 'flex', flexDirection:'row', justifyContent: 'center', fontSize: '30px', textShadow: "4px 4px 6px #000000" }}>
                    Things I like to Do:
                </Row>
                <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center' }}>
                    <ul style={{marginRight: "15px", listStyleType: 'none'}}>
                        <li><PhishingIcon/> Fishing</li>
                        <li><SportsFootballIcon/> Football</li>
                        <li><LibraryMusicIcon/> Guitar</li>
                        <li><TwoWheelerIcon/> Biking</li>
                    </ul>
                
                    <ul style={{marginLeft: "15px", listStyleType: 'none'}}>
                        <li><GolfCourseIcon /> Disc Golf</li>
                        <li><AutoStoriesIcon/> Reading</li>
                        <li><HikingIcon/> Hiking</li>
                        <li><OutdoorGrillIcon/> Cooking food</li>
                    </ul> 
                </div>
            </Container>
    );
    
}
