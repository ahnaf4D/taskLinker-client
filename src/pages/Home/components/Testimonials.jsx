import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Raisul Islam Rifat",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            quote: "This platform has changed the way I work. The tasks are simple, and the rewards are amazing!",
            email: "raisulrifat@example.com",
        },
        {
            name: "Ayesha Rahman",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            quote: "I absolutely love how secure and user-friendly this platform is. It’s perfect for freelancers like me!",
            email: "ayesha.rahman@example.com",
        },
        {
            name: "Tanvir Hossain",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            quote: "A fantastic platform with great opportunities for earning while working flexibly.",
            email: "tanvir.hossain@example.com",
        },
        {
            name: "Nusrat Jahan",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            quote: "I’ve been able to complete tasks and earn coins easily. Highly recommend this platform to everyone!",
            email: "nusrat.jahan@example.com",
        },
    ];

    return (
        <div className="px-4 py-8 bg-gray-100">
            <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
                What our User Say
            </h2>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                loop={true}
                autoplay={true}
                className="mySwiper max-w-3xl mx-auto"
            >
                {testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="text-center bg-white rounded-lg shadow-lg p-6">
                            <FaQuoteLeft className="text-gray-300 w-12 h-12 mx-auto mb-4" />
                            <p className="text-gray-700 text-lg italic mb-6">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex flex-col items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mb-4"
                                />
                                <p className="text-gray-900 font-bold text-lg">
                                    {testimonial.name}
                                </p>
                                <p className="text-gray-500 text-sm">{testimonial.email}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
