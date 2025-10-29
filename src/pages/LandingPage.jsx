import Banner from "../components/Banner";
import Features from "../components/Features";
import HowItWorks from "../components/HowitWorks";
import Navbar from "../components/Navbar";
import UseCases from "../components/UseCases";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features/>
      <HowItWorks />
      <UseCases />
    </div>
  );
};

export default LandingPage;
