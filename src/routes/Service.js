import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/img10.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Service"
        text=""
        url="/"
        btnText="Travel Plan"
        btnClass="hide"
        heroImg={AboutImg}
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
