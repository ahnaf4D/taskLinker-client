import { Carousel } from 'react-responsive-carousel';
import CarouselOne from "../../../assets/carouselOne.jpg";
import CarouselTwo from "../../../assets/carouselTwo.jpg";
import CarouselThree from "../../../assets/carouselThree.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS styles

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: CarouselOne,
            heading: "Welcome to TaskLinker",
            title: "Effortless Micro-Task Management",
            description: "Find quick gigs or hire freelancers with ease. Let's get work done faster together!",
        },
        {
            id: 2,
            image: CarouselTwo,
            heading: "Hire Top Freelancers",
            title: "Achieve More with Expert Help",
            description: "Connect with skilled professionals to accomplish your goals, no matter how small or big.",
        },
        {
            id: 3,
            image: CarouselThree,
            heading: "Earn on Your Terms",
            title: "Turn Your Skills into Income",
            description: "Join our network and start earning by completing tasks that suit your schedule.",
        },
    ];

    return (
        <Carousel
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={800}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            emulateTouch
            swipeable
            className="relative"
        >
            {slides.map((slide) => (
                <div key={slide.id} className="relative">
                    <img src={slide.image} alt={slide.heading} className="w-full h-[500px] object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-5">
                        <h2 className="text-4xl font-bold mb-3">{slide.heading}</h2>
                        <p className="text-2xl font-medium mb-4">{slide.title}</p>
                        <p className="text-lg max-w-2xl">{slide.description}</p>
                        <button className="mt-5 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Hero;
