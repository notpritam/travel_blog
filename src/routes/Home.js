import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destignation"
        url="/"
        btnText="Travel Plan"
        btnClass="show"
        heroImg="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=2520&h=1500&dpr=1"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
