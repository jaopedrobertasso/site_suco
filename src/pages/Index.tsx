
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Plans from '../components/Plans';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
