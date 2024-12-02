import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Technologies } from './components/Technologies';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Technologies />
        <Stats />
        <Portfolio />
        <Team />
        <Testimonials />
        <Clients />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;