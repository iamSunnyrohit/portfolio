import Header from './components/header/header'
import './App.css';
import Nav from './components/nav/nav'
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Experience from './components/experience/experience';



function App() {
  return (
     <>
         <Header />
         <Nav/>
         <About />
         <Experience />
         <Services />
         <Contact />
         <Footer />
     </>
  )
}

export default App;
