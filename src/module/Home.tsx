import { Footer } from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import Hero from "./components/Hero";
import Leadboard from "./components/Leadboard";
import Rewards from "./components/Rewards";
import Social from "./components/Social";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rewards />
      <Leadboard />
      <Social />
      <Footer />
    </>
  );
};

export default Home;
