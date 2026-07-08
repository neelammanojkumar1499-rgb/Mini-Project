import React, { useState } from "react";
import { FaRobot, FaSpinner } from "react-icons/fa6";

export default function DemoPage() {
    const [form, setForm] = useState({ symptoms: "", age: "", gender: "" });
    const [answer, setAnswer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setAnswer(null);
        setError(null);
        try {
            const res = await fetch("http://localhost:5000/api/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                const out = await res.json();
                setAnswer(out);
            } else {
                setError("Server error. Please try again.");
            }
        } catch {
            setError("Cannot reach backend. Make sure the server is running on port 5000.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h2 className="text-2xl font-bold text-primary-blue flex items-center gap-2 mb-6">
                <FaRobot className="text-primary-teal" /> AI Assistant Demo
            </h2>
            <div className="bg-white rounded-card shadow-card p-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-primary-teal font-semibold mb-1">Symptoms</label>
                        <input
                            type="text"
                            name="symptoms"
                            value={form.symptoms}
                            onChange={handleChange}
                            placeholder="e.g. fever, cough, headache"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-teal"
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-primary-teal font-semibold mb-1">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={form.age}
                                onChange={handleChange}
                                placeholder="e.g. 25"
                                min="1" max="120"
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-teal"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-primary-teal font-semibold mb-1">Gender</label>
                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-teal"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-primary-teal text-white rounded-full font-semibold hover:bg-primary-blue transition flex items-center justify-center gap-2"
                    >
                        {loading ? <FaSpinner className="animate-spin" /> : null}
                        {loading ? "Analysing..." : "Get Prediction"}
                    </button>
                </form>

                {error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {error}
                    </div>
                )}

                {answer && (
                    <div className="mt-6 bg-soft-teal rounded-card p-5 space-y-2">
                        <p><span className="font-semibold text-primary-blue">Predicted Disease:</span> {answer.disease}</p>
                        <p><span className="font-semibold text-primary-blue">Medicines:</span> {answer.medicines?.join(", ")}</p>
                        <p><span className="font-semibold text-primary-blue">Doctor:</span> {answer.doctor}</p>
                        <p className="text-xs text-gray-500 mt-2 italic">{answer.caution}</p>
                    </div>
                )}
            </div>

            <div className="mt-6 text-xs text-center bg-soft-blue py-2 px-4 rounded-card text-gray-700">
                <b>Medical Safety Disclaimer:</b> This is a demo prediction — not a real diagnosis.
                Always consult a qualified doctor.
            </div>
        </div>
    );
}
