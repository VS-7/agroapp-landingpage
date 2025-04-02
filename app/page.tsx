import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Blog } from './components/Blog';
import { WhitelistForm } from './components/WhitelistForm';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Blog />
      <WhitelistForm />
      <Footer />
    </main>
  )
}
