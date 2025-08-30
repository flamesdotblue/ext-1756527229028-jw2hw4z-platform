import Hero from './components/Hero';
import Principles from './components/Principles';
import Testimonials from './components/Testimonials';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-serif">
      <Hero />
      <main>
        <Principles />
        <Testimonials />
        <CTAFooter />
      </main>
    </div>
  );
}

export default App;
