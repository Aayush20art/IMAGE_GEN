// src/components/MeetOurTeam.jsx

import React from "react";

// Import images (replace with your actual image paths)
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";

export default function MeetOurTeam() {
    return (
        <div className="min-h-screen bg-[#141414] flex items-center justify-center px-8 pr-80 ">
            <div className="w-full flex flex-row justify-between items-center max-w-7xl mx-auto">
                <div className="max-w-xl -pl-20 pr-20 flex flex-col space-y-5 -mt-60">
                    <div>
                        <span className="inline-block px-9 py-5 bg-[#1C1C1C] rounded-full text-purple-400 font-semibold text-2xl">
                            Our Team
                        </span>
                    </div>
                    <h1 className="text-6xl font-bold text-white">
                        Meet Our Team
                    </h1>
                    <p className="text-2xl text-gray-200">
                        Our team comprises AI experts, creative designers,
                        and dedicated engineers passionate about revolutionizing image generation with cutting-edge technology and innovative solutions.
                    </p>
                </div>

                <div className="relative w-[700px] h-[700px] hidden lg:block pl-60">
                    <img
                        src={img1}
                        alt="Team member"
                        className="absolute top-0 -right-50 w-48 h-48 object-cover rounded-2xl shadow-lg"
                    />
                    <img
                        src={img2}
                        alt="Team member"
                        className="absolute top-1/3 right-70 w-32 h-32 object-cover rounded-2xl shadow-lg"
                    />
                    <img
                        src={img3}
                        alt="Team member"
                        className="absolute top-[55%] right-16 w-24 h-24 object-cover rounded-2xl shadow-lg"
                    />
                    <img
                        src={img4}
                        alt="Team member"
                        className="absolute bottom-10 left-183 w-40 h-40 object-cover rounded-2xl shadow-lg"
                    />
                    <img
                        src={img5}
                        alt="Team member"
                        className="absolute -bottom-10 right-40 w-28 h-28 object-cover rounded-2xl shadow-lg"
                    />

                </div>

            </div>
        </div>

    );
}
