import React, { useState } from "react";

const plans = [
    {
        title: "Personal Plan",
        price: "$49.00",
        features: [
            "Easy To Track AI Data",
            "100+ Ready Boots",
            "Best Data Plan & Package",
            "24/7 Online Support",
        ],
    },
    {
        title: "Advanced",
        price: "$49.00",
        features: [
            "Easy To Track AI Data",
            "100+ Ready Boots",
            "Best Data Plan & Package",
            "24/7 Online Support",
        ],
        highlight: true,
    },
    {
        title: "For Team",
        price: "$49.00",
        features: [
            "Easy To Track AI Data",
            "100+ Ready Boots",
            "Best Data Plan & Package",
            "24/7 Online Support",
        ],
    },
];

const Plan = () => {
    const [isYearly, setIsYearly] = useState(true);
    const [users, setUsers] = useState(25);

    return (
        <div className="bg-gray-100 text-black">
            <div className="bg-black text-white p-6">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 py-6">
                    <div className="flex flex-col">
                        <h2 className="text-blue-400 tracking-widest uppercase text-sm">Our Plans</h2>
                        <h1 className="text-2xl md:text-3xl font-bold">Minimalist Plans</h1>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={users}
                            onChange={(e) => setUsers(Number(e.target.value))}
                            className="w-48"
                        />
                        <span className="text-white font-semibold">{users} users</span>
                    </div>

                    <div className="flex gap-2 bg-gray-800 rounded-full p-1">
                        <button
                            className={`px-4 py-1 rounded-full ${!isYearly ? "bg-orange-500 text-white" : "text-gray-400"}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-1 rounded-full ${isYearly ? "bg-orange-500 text-white" : "text-gray-400"}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

            </div>

            {/* Plan Cards Section */}
            <div className="max-w-7xl mx-auto p-6 -mt-12 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 rounded-2xl shadow-md relative flex flex-col items-center ${plan.highlight ? "border-t-8 border-orange-400" : ""
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-0 right-0 bg-orange-400 text-white text-center py-1 text-sm font-semibold rounded-t-2xl">
                                    POPULAR DEAL: 50% OFFER
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mt-6">{plan.title}</h3>
                            <p className="text-gray-500 mt-1">Customized anything in anytime</p>
                            <div className="group mt-6">
                                <div className="bg-blue-100 text-blue-700 font-bold py-2 px-6 rounded-full text-center transition duration-300 ease-in-out group-hover:bg-blue-600 group-hover:text-white cursor-pointer">
                                    <span className="group-hover:hidden">Price: {plan.price}</span>
                                    <span className="hidden group-hover:inline">Purchase Now →</span>
                                </div>
                            </div>


                            <ul className="mt-6 space-y-4 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-orange-500 text-lg">🧊</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Plan;
