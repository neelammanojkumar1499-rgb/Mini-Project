import React from "react";
import { FaChartBar, FaMedal, FaArrowRight } from "react-icons/fa6";

export default function ResultsPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-primary-blue text-2xl font-bold flex items-center gap-2 mb-2">
        <FaChartBar className="text-primary-teal" />
        Results & Comparison
      </h2>
      <section className="mb-8">
        <div className="bg-white rounded-card shadow-card p-6">
          <h3 className="text-primary-teal font-semibold mb-2 text-lg">Impact</h3>
          <ul className="list-disc pl-5 text-gray-800 text-base space-y-1 mb-2">
            <li>Offers quick, preliminary medical guidance for users.</li>
            <li>Helps users decide which doctor to consult for their symptoms.</li>
            <li>Highly useful in remote or resource-limited areas.</li>
          </ul>
          <h3 className="text-primary-teal font-semibold mb-2 text-lg">Comparison with Other Systems</h3>
          <table className="min-w-full bg-soft-blue rounded-lg mt-2 mb-2 text-sm">
            <thead>
              <tr className="text-left text-primary-blue">
                <th className="py-1 px-3">System</th>
                <th className="py-1 px-3">Speed</th>
                <th className="py-1 px-3">Precision</th>
                <th className="py-1 px-3">Medicine Verified</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white even:bg-soft-blue">
                <td className="py-1 px-3">Medical VA (ours)</td>
                <td className="py-1 px-3">⭐⭐⭐⭐⭐</td>
                <td className="py-1 px-3">⭐⭐⭐⭐</td>
                <td className="py-1 px-3">✅</td>
              </tr>
              <tr className="even:bg-soft-blue">
                <td className="py-1 px-3">Ada Health</td>
                <td className="py-1 px-3">⭐⭐⭐</td>
                <td className="py-1 px-3">⭐⭐⭐</td>
                <td className="py-1 px-3">➖</td>
              </tr>
              <tr className="bg-white even:bg-soft-blue">
                <td className="py-1 px-3">Your.MD</td>
                <td className="py-1 px-3">⭐⭐</td>
                <td className="py-1 px-3">⭐⭐</td>
                <td className="py-1 px-3">➖</td>
              </tr>
              <tr className="even:bg-soft-blue">
                <td className="py-1 px-3">Buoy Health</td>
                <td className="py-1 px-3">⭐⭐</td>
                <td className="py-1 px-3">⭐⭐⭐</td>
                <td className="py-1 px-3">➖</td>
              </tr>
              <tr className="bg-white even:bg-soft-blue">
                <td className="py-1 px-3">Babylon Health</td>
                <td className="py-1 px-3">⭐⭐⭐</td>
                <td className="py-1 px-3">⭐⭐</td>
                <td className="py-1 px-3">➖</td>
              </tr>
            </tbody>
          </table>
          <ul className="list-disc pl-5 text-gray-800 text-base space-y-1 my-2">
            <li>Other apps tend to be slower, less precise, or give only general advice.</li>
            <li>Medical VA aims for quick, focused prediction with doctor-verified medicines.</li>
          </ul>
          <div className="flex items-center gap-2 text-primary-teal font-semibold mt-2">
            <FaArrowRight /> This system <b>supports</b> doctors — <span className="font-normal">does not replace them.</span>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="max-w-2xl text-xs text-center bg-soft-blue py-2 px-4 rounded-card mt-4 text-gray-700">
          <b>Medical Safety Disclaimer:</b> Guidance provided is supportive, not medical advice.
        </div>
      </div>
    </div>
  );
}