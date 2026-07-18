import React, { useState } from "react";
import { FaUsers, FaEnvelope } from "react-icons/fa";

const team = [
    { name: "Team Member 1", role: "ML & Backend", email: "member1@example.com" },
    { name: "Team Member 2", role: "Android & UI", email: "member2@example.com" },
    { name: "Team Member 3", role: "Research & Datasets", email: "member3@example.com" },
];

export default function TeamContactPage() {
    const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = e => setInputs(i => ({ ...i, [e.target.name]: e.target.value }));

    async function handleSubmit(e) {
        e.preventDefault();
        setSent(false);
        setError(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs)
            });
            if (res.ok) {
                setSent(true);
            } else {
                setError("Server error. Please try again.");
            }
        } catch {
            setError("Cannot reach backend. Make sure the server is running on port 5000.");
        }
        setTimeout(() => setSent(false), 4000);
        setInputs({ name: "", email: "", message: "" });
    }

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h2 className="text-primary-blue text-2xl font-bold flex items-center gap-2 mb-6">
                <FaUsers className="text-primary-teal" /> Team &amp; Contact
            </h2>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {team.map(m => (
                    <div key={m.name} className="bg-white rounded-card shadow-card p-5 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-soft-teal flex items-center justify-center text-2xl font-bold text-primary-blue mb-2">
                            {m.name[0]}
                        </div>
                        <p className="font-semibold text-primary-blue">{m.name}</p>
                        <p className="text-xs text-primary-teal mb-1">{m.role}</p>
                        <a href={`mailto:${m.email}`} className="text-xs text-gray-500 hover:text-primary-teal transition">{m.email}</a>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-card shadow-card p-6">
                <h3 className="font-semibold text-primary-teal text-lg flex items-center gap-2 mb-4">
                    <FaEnvelope className="text-primary-blue" /> Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-teal"
                    />
                    <input
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-teal"
                    />
                    <textarea
                        name="message"
                        value={inputs.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows={4}
                        className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-teal resize-none"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-primary-teal text-white rounded-full font-semibold hover:bg-primary-blue transition"
                    >
                        Send Message
                    </button>
                </form>
                {sent && (
                    <div className="mt-3 p-3 bg-soft-teal rounded-lg text-primary-teal font-semibold text-center">
                        ✅ Message sent successfully!
                    </div>
                )}
                {error && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}
