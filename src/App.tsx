import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RecentActivity from './components/RecentActivity';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <RecentActivity />
      </main>
      <Footer />
    </div>
  );
}

export default App;
