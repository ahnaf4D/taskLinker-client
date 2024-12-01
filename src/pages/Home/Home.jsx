import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import TopEarners from "./components/TopEarners";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <HowItWorks></HowItWorks>
            <TopEarners></TopEarners>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;