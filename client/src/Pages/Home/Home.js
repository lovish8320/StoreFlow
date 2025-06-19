import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import { Box, ClipboardList, Users } from "lucide-react";

function Home() {
    return (
        <>
            <Navigation />

            <div className="pt-[5vh] font-sans">
                {/* Hero Section */}
                <section className="py-32 bg-gradient-to-br from-[#007B8A] via-[#00B3B3] to-[#00E6A0] text-white text-center">
                    <div className="container mx-auto px-6 max-w-screen-md animate-fade-in">
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
                            Simplify Your Inventory
                        </h1>
                        <p className="text-lg mb-8 opacity-90">
                            Track items, manage stock, and collaborate with your team—all in one platform.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-6 bg-gray-100 text-gray-800">
                    <div className="container mx-auto max-w-screen-lg">
                        <h2 className="text-3xl font-bold text-center mb-16">
                            Smart Features
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Feature 1 */}
                            <div className="text-center bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
                                <ClipboardList className="mx-auto mb-4 h-12 w-12 text-[#028090] animate-bounce-slow" />
                                <h3 className="text-2xl font-semibold mb-3">Item Tracking</h3>
                                <p className="text-gray-600">
                                    Effortlessly manage your inventory. Add, search, filter with just a click.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="text-center bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
                                <Box className="mx-auto mb-4 h-12 w-12 text-[#028090] animate-bounce-slow" />
                                <h3 className="text-2xl font-semibold mb-3">Smart Stock Alerts</h3>
                                <p className="text-gray-600">
                                    Get automatic notifications when stock runs low or needs restocking.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="text-center bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
                                <Users className="mx-auto mb-4 h-12 w-12 text-[#028090] animate-bounce-slow" />
                                <h3 className="text-2xl font-semibold mb-3">Team Collaboration</h3>
                                <p className="text-gray-600">
                                    Share inventory control with your team using secure, role-based access.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-gradient-to-r from-[#028090] to-[#00B3B3] text-white text-center">
                    <div className="container mx-auto max-w-screen-md px-6">
                        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                        <p className="text-lg mb-8">
                            Boost your inventory efficiency with our powerful, easy-to-use system.
                        </p>
                        {/* Optional CTA button (currently removed per your earlier request) */}
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}

export default Home;
