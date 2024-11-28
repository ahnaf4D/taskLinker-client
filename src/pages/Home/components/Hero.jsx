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
                    <img src={slide.image} alt={slide.heading} className="w-full h-[500px] object-cover brightness-75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black flex flex-col justify-center items-center text-white text-center px-5 py-10">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-widest text-shadow-md">
                            {slide.heading}
                        </h2>
                        <p className="text-3xl md:text-4xl font-semibold mb-6 opacity-80">
                            {slide.title}
                        </p>
                        <p className="text-lg md:text-xl max-w-3xl opacity-90 mb-8 px-2">
                            {slide.description}
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-semibold rounded-lg transform hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
                            Get Started
                        </button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Hero;
