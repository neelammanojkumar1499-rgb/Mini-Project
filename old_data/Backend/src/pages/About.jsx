import React from "react";
import { FaStethoscope, FaBrain, FaPills } from "react-icons/fa6";
import { PiUserCheckDuotone } from "react-icons/pi";

const features = [
    {
        title: "Disease Prediction",
        icon: <FaBrain className="text-primary-teal text-3xl mb-2" />,
        desc: "Predicts the most likely disease based on symptoms, using robust machine learning (Gaussian Naive Bayes).",
    },
    {
        title: "Medicine Recommendation",
        icon: <FaPills className="text-primary-blue text-3xl mb-2" />,
        desc: "Suggests medicines based on disease, age, and gender, providing personalized treatment support.",
    },
    {
        title: "Doctor Suggestion & Verification",
        icon: <PiUserCheckDuotone className="text-primary-teal text-3xl mb-2" />,
        desc: "Recommends the right health specialist and provides a doctor verification module for safe, trusted choices.",
    }
];

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-blue mb-2 flex items-center gap-2">
                    <FaStethoscope className="text-primary-teal" /> About the Project
                </h2>
                <div className="bg-white rounded-card shadow-card p-6 mb-8">
                    <h3 className="text-primary-teal font-semibold mb-2 text-lg">Problem Statement</h3>
                    <ul className="list-disc pl-5 text-gray-800 text-base space-y-1">
                        <li>Timely medical advice is hard to access.</li>
                        <li>Hospitals are often overloaded—waiting times are long.</li>
                        <li>Searching Google/Web often leads to unreliable, risky self-diagnosis.</li>
                        <li>There's a need for early medical guidance using AI to improve outcomes.</li>
                    </ul>
                </div>
                <div className="bg-white rounded-card shadow-card p-6 mb-8">
                    <h3 className="text-primary-teal font-semibold mb-2 text-lg">Solution Overview</h3>
                    <ul className="list-check pl-5 text-gray-800 text-base space-y-1">
                        <li>Android app with symptom input (text or voice).</li>
                        <li>Disease prediction using <b>Gaussian Naive Bayes</b> algorithm.</li>
                        <li>Personalized medicine suggestions (by age &amp; gender).</li>
                        <li>Immediate doctor recommendation and verification module.</li>
                    </ul>
                </div>
            </section>
            <section>
                <h4 className="text-primary-blue font-semibold text-lg mb-6">Core Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {features.map(({ title, icon, desc }) => (
                        <div key={title} className="bg-soft-blue rounded-card shadow-card p-5 flex flex-col items-center text-center">
                            {icon}
                            <h5 className="font-semibold mt-1 text-primary-teal">{title}</h5>
                            <p className="text-sm mt-2 text-gray-700">{desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 w-full flex justify-center">
                    <div className="max-w-2xl text-xs text-center bg-soft-blue py-2 px-4 rounded-card mt-4 text-gray-700">
                        <b>Medical Safety Disclaimer:</b> This tool provides guidance, not a diagnosis.
                        Always consult professionals for decisions about your health.
                    </div>
                </div>
            </section>
        </div>
    );
}
