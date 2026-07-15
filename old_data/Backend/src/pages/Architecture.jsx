import React from "react";
import { PiBrainDuotone } from "react-icons/pi";
import { FaDiagramProject } from "react-icons/fa6";

export default function ArchitecturePage() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h2 className="text-primary-blue text-2xl font-bold flex items-center gap-2 mb-2">
                <FaDiagramProject className="text-primary-teal" />
                System Architecture &amp; Algorithm
            </h2>
            <section className="mb-8">
                <div className="bg-white rounded-card shadow-card p-5">
                    <h3 className="text-lg font-semibold text-primary-teal mb-3">System Diagram</h3>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="bg-soft-blue px-3 py-1 rounded-lg shadow text-sm font-semibold">User</span>
                            <span>→</span>
                            <span className="bg-soft-blue px-3 py-1 rounded-lg shadow text-sm">Preprocessing</span>
                            <span>→</span>
                            <span className="bg-soft-teal px-3 py-1 rounded-lg shadow text-sm font-semibold">
                                ML (GNB)
                            </span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="bg-soft-blue px-3 py-1 rounded-lg text-xs">Disease Prediction</span>
                            <span className="bg-soft-blue px-3 py-1 rounded-lg text-xs">Medicine Suggestion</span>
                            <span className="bg-soft-blue px-3 py-1 rounded-lg text-xs">Doctor Recommendation</span>
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <span className="bg-soft-teal px-3 py-1 rounded-lg text-xs">Doctor Module</span>
                            <span>→</span>
                            <span className="bg-soft-blue px-3 py-1 rounded-lg text-xs">Verification</span>
                            <span>→</span>
                            <span className="bg-soft-teal px-3 py-1 rounded-lg text-xs">Feedback</span>
                            <span>→</span>
                            <span className="bg-soft-blue px-3 py-1 rounded-lg text-xs">Database</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white rounded-card shadow-card p-6">
                <h3 className="text-lg font-semibold text-primary-teal mb-3 flex items-center gap-2">
                    <PiBrainDuotone className="text-primary-blue" /> Gaussian Naive Bayes (GNB) Algorithm
                </h3>
                <ul className="list-disc list-inside text-gray-800 mb-2 space-y-1">
                    <li>Assumes each feature is independent and follows a Gaussian (normal) distribution.</li>
                    <li>Formula: <span className="bg-soft-blue px-2 py-0.5 rounded">P(A|B) = (P(B|A) × P(A)) / P(B)</span></li>
                    <li>Benefits: fast training, accurate with small datasets, robust for medical symptom analysis.</li>
                </ul>
            </section>
            <div className="mt-8 w-full flex justify-center">
                <div className="max-w-2xl text-xs text-center bg-soft-blue py-2 px-4 rounded-card mt-4 text-gray-700">
                    <b>Medical Safety Disclaimer:</b> This software prototype is for educational demonstration only.
                </div>
            </div>
        </div>
    );
}
