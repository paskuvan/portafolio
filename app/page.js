import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkList from "./components/WorkList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <WorkList />
      </main>
      <Footer />
    </>
  );
}
