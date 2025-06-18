import React, { useEffect, useState } from "react";

const testimonials = [
    {
        stars: 5,
        text: "Big thank to team support of Iteck. Fast, professional and extremly friendly. ",
        name: "Eduard Mendy",
        title: "VP of Sale Development",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        stars: 5,
        text: "10/10 for all related to Iteck E-Com Dashboard. It's too perfect!",
        name: "Lucas Digne",
        title: "Sale Product Management at Flipkart",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        stars: 5,
        text: "Best dashboard for any your store, woo or shopify. Powerful and very flexiable. Recommended!",
        name: "Thomas Eristen",
        title: "Sale Director at Amazon Retail",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
        stars: 5,
        text: "Iteck provide very much features to help increase CRO so amazing.",
        name: "Carlos Martinelli",
        title: "SEO & Marketing at Ebay Global",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
    },
];

const ClientCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleTestimonials = () => {
        const start = currentIndex;
        const end = start + visibleCards;
        const sliced = testimonials.slice(start, end);
        if (sliced.length < visibleCards) {
            return [...sliced, ...testimonials.slice(0, visibleCards - sliced.length)];
        }
        return sliced;
    };

    return (
        <div className="w-full py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    Clients <span className="text-blue-600">Reviews</span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Iteck loved from thousands customer worldwide and get trusted from big companies.
                </p>
            </div>

            <div className="overflow-hidden">
                <div className="flex justify-center gap-6 transition-all duration-500">
                    {getVisibleTestimonials().map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-white w-80 rounded-2xl p-6 text-center shadow hover:shadow-lg transition ${index % 2 === 1 ? 'h-[380px]' : 'h-[420px]'
                                }`}
                        >


                            <div className="flex justify-center mb-4">
                                {Array.from({ length: testimonial.stars }).map((_, i) => (
                                    <span key={i} className="text-green-500 text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 text-3xl">“{testimonial.text}”</p>
                            <div className="flex items-center justify-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientCarousel;
