import './App.css';
import Hero from './components/hero/Hero';
import Plans from './components/Plans/Plans';
import Program from './components/Program/Program';
import Testimonials from './components/Testimonials/Testimonials';
import Reasons from './components/Reasons/Reasons';
import Join from './components/Join/Join';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials /> 
      <Join />
      <Footer />
    </div>
  );
}

export default App;
