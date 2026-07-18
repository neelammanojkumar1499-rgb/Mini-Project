import React from "react";
import { FaHeartbeat } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white shadow-inner py-6 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-2">
                <span className="flex items-center gap-2 text-primary-blue font-semibold text-lg">
                    <FaHeartbeat className="inline text-primary-teal" />
                    Medical Virtual Assistant
                </span>
                <span className="text-xs text-gray-500">
                    Built with <span className="text-red-500">❤️</span> for academic project purpose
                </span>
                <small className="text-gray-400">PESMCOE, Pune &mdash; Copyright © {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
}
