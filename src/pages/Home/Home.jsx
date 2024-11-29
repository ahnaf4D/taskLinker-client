import Feature from "./components/Feature";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import TopEarners from "./components/TopEarners";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <HowItWorks></HowItWorks>
            <TopEarners></TopEarners>
        </div>
    );
};

export default Home;