// import logo_ from './svg/logo_.svg';
import vader from './media/vader.jpeg';
import './App.css';
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills"
// import { Projects } from "./components/projects"
import { AboutMe } from './components/aboutMe';
import { Footer } from './components/footer';
// import { ProjectDemo } from "./projectDemo";
import { Interests } from './components/Interests';
import 'bootstrap/dist/css/bootstrap.min.css';

const bgStyle = {
    backgroundImage: `url(${vader})`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
};
function App() {

  return (

    <div className='background-image'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='jedi' style={{color: 'white'}}>
            <AboutMe/>
            <Skills />
            <Interests/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
