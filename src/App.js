import './App.css';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portofolio from './components/Portofolio';
import Services from './components/Services';
import SideNav from './components/SideNav';
import Slider from './components/Slider';

const M = window.M;
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {});
});

function App() {
  return (
    <body id="home" class="scrollspy">
      <Navbar/>
      <SideNav/>
      <Slider />
      <AboutUs />
      <Clients />
      <Services />
      <Portofolio />
      <ContactUs />
      <Footer />
    </body>
  );
}

export default App;
