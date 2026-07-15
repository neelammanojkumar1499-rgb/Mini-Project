import React from "react";
import { FaDatabase, FaListCheck } from "react-icons/fa6";
import { PiTimelineFill } from "react-icons/pi";

const datasetPreview = [
  { id: 1, symptoms: "fever, cough", disease: "Viral Fever", medicine: "Paracetamol", gender: "Any", age: "10-80" },
  { id: 2, symptoms: "headache", disease: "Migraine", medicine: "Sumatriptan", gender: "Any", age: "12-75" },
  { id: 3, symptoms: "chest pain", disease: "Angina", medicine: "Aspirin", gender: "Any", age: "40-80" },
];

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-primary-blue text-2xl font-bold flex items-center gap-2 mb-2">
        <FaListCheck className="text-primary-teal" />
        Methodology & Datasets
      </h2>
      {/* Methodology Timeline */}
      <section className="mb-8">
        <div className="bg-white rounded-card shadow-card p-6">
          <h3 className="font-semibold text-primary-teal mb-2 flex items-center gap-2">
            <PiTimelineFill className="text-primary-blue" /> Methodology Steps
          </h3>
          <ol className="relative border-l-2 border-primary-blue ml-4 space-y-4 pl-6">
            <li>
              <b>Data Collection:</b> Collect diverse health records—symptoms, diseases, medicines, age, gender.
            </li>
            <li>
              <b>Model Training:</b> Train/test split, learn via Gaussian Naive Bayes (GNB) classifier.
            </li>
            <li>
              <b>Android App Dev:</b> Build app using XML UI, Java code, connect Firebase for backend.
            </li>
            <li>
              <b>Prediction & Recommendations:</b> Deploy model to app for real-time symptom checks.
            </li>
            <li>
              <b>Evaluation:</b> Measure with accuracy, precision, recall, F1-score. Continuous improvements.
            </li>
          </ol>
        </div>
      </section>
      {/* Dataset Preview */}
      <section className="mb-8">
        <div className="bg-white rounded-card shadow-card p-6">
          <h3 className="font-semibold text-primary-teal mb-2 flex items-center gap-2">
            <FaDatabase className="text-primary-blue" /> Sample Dataset Preview
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-soft-blue rounded-lg text-sm">
              <thead>
                <tr className="text-left text-primary-blue">
                  <th className="py-1 px-3">Symptoms</th>
                  <th className="py-1 px-3">Disease</th>
                  <th className="py-1 px-3">Medicine</th>
                  <th className="py-1 px-3">Age</th>
                  <th className="py-1 px-3">Gender</th>
                </tr>
              </thead>
              <tbody>
                {datasetPreview.map(row => (
                  <tr key={row.id} className="bg-white even:bg-soft-blue">
                    <td className="py-1 px-3">{row.symptoms}</td>
                    <td className="py-1 px-3">{row.disease}</td>
                    <td className="py-1 px-3">{row.medicine}</td>
                    <td className="py-1 px-3">{row.age}</td>
                    <td className="py-1 px-3">{row.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Simple bar chart with CSS */}
          <h4 className="mt-5 text-primary-blue font-semibold">Frequency of Common Diseases</h4>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2"><span className="w-24">Viral Fever</span>
              <div className="bg-primary-teal h-3 rounded" style={{width:'60%'}}></div> <span className="text-xs">120</span>
            </div>
            <div className="flex items-center gap-2"><span className="w-24">Migraine</span>
              <div className="bg-primary-blue h-3 rounded" style={{width:'35%'}}></div> <span className="text-xs">70</span>
            </div>
            <div className="flex items-center gap-2"><span className="w-24">Angina</span>
              <div className="bg-primary-teal h-3 rounded" style={{width:'18%'}}></div> <span className="text-xs">30</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-700">
            (Data is anonymized and only used for educational purposes)
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="max-w-2xl text-xs text-center bg-soft-blue py-2 px-4 rounded-card mt-4 text-gray-700">
          <b>Medical Safety Disclaimer:</b> Academic demonstration dataset, not for medical use.
        </div>
      </div>
    </div>
  );
}