import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { PiBrainDuotone } from "react-icons/pi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

function HeroChatMockup() {
    return (
        <div className="w-full sm:w-[370px] mx-auto bg-white rounded-3xl shadow-card p-4 mt-4">
            <div className="flex items-end gap-2">
                <MdOutlineMobileFriendly className="text-2xl text-primary-teal" />
                <div className="bg-soft-blue rounded-2xl py-2 px-4 max-w-[210px]">
                    <span className="text-gray-700">I have <b>fever</b> and <b>sore throat</b>.</span>
                </div>
            </div>
            <div className="flex items-end gap-2 mt-4 justify-end">
                <div className="bg-soft-teal rounded-2xl py-2 px-4 max-w-[240px] text-right">
                    <span>
                        <b>Possible disease:</b> Viral Fever<br />
                        <b>Medicines:</b> Paracetamol, Cetrizine<br />
                        <b>Doctor:</b> General Physician
                    </span>
                </div>
                <PiBrainDuotone className="text-2xl text-primary-blue" />
            </div>
        </div>
    );
}

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto py-10 md:py-16 px-4 flex flex-col items-center text-center">
                <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center gap-2 mb-1">
                        <FaStethoscope className="text-3xl text-primary-teal" />
                        <h1 className="text-3xl md:text-4xl font-bold text-primary-blue">
                            Medical Virtual Assistant
                        </h1>
                    </div>
                    <h2 className="text-lg md:text-xl text-primary-teal font-medium">
                        AI-powered healthcare guidance using Gaussian Naive Bayes
                    </h2>
                    <p className="max-w-2xl text-base md:text-lg text-gray-700 mt-2">
                        This Android-based assistant allows users to input symptoms (via voice or text)
                        to get the <b>predicted disease</b>, <b>personal medicine suggestions</b> and <b>doctor recommendations</b>.
                    </p>
                    <div className="flex gap-4 mt-5 flex-col sm:flex-row">
                        <button
                            onClick={() => navigate("/about")}
                            className="px-4 py-2 bg-primary-teal text-white rounded-full font-semibold hover:shadow-card transition"
                        >
                            View Project Details
                        </button>
                        <button
                            onClick={() => navigate("/results")}
                            className="px-4 py-2 bg-primary-blue text-white rounded-full font-semibold hover:shadow-card transition"
                        >
                            Explore Datasets &amp; Results
                        </button>
                    </div>
                </div>
                <HeroChatMockup />
            </section>

            {/* Short Problem Teaser */}
            <section className="max-w-4xl mx-auto mt-10 px-4 pb-10">
                <div className="rounded-card bg-white shadow-card p-6 flex flex-col md:flex-row items-center gap-6">
                    <HiOutlineChatBubbleLeftRight className="text-5xl text-primary-blue mb-4 md:mb-0" />
                    <div className="flex-1 text-left">
                        <h3 className="text-xl font-semibold text-primary-teal mb-2">Why this project?</h3>
                        <p className="text-gray-700">
                            Quick access to reliable medical guidance is hard&mdash;while self-diagnosis from internet searches
                            can be risky and confusing. Our assistant bridges the gap&mdash;delivering helpful, early
                            support and reducing hospital/clinic overload.
                        </p>
                    </div>
                </div>
            </section>
            {/* Disclaimer */}
            <div className="w-full flex justify-center mb-8">
                <div className="max-w-2xl text-xs text-center bg-soft-blue py-2 px-4 rounded-card mt-4 text-gray-700">
                    <b>Medical Safety Disclaimer:</b> This project offers guidance, not medical diagnosis.
                    Always consult a qualified healthcare professional for medical emergencies.
                </div>
            </div>
        </div>
    );
}
