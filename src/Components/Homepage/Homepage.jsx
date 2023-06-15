import About from './About/About';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Homepage = () => {
    return (
        <>
         <Banner></Banner>   
         <About></About>
         <Skills></Skills>
         <Projects></Projects>
        </>
    );
};

export default Homepage;