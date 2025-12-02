import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeartbeat, FaStethoscope, FaComments } from 'react-icons/fa';
import { PiBrainDuotone } from 'react-icons/pi';
import { MdOutlineMobileFriendly } from 'react-icons/md';

const navLinks = [
  { to: '/', label: 'Home', icon: <FaHeartbeat className="inline mr-1 text-primary-teal" /> },
  { to: '/about', label: 'About Project', icon: <FaStethoscope className="inline mr-1 text-primary-blue" /> },
  { to: '/demo', label: 'AI Assistant Demo', icon: <FaComments className="inline mr-1 text-primary-teal" /> },
  { to: '/architecture', label: 'Architecture & Algorithm', icon: <PiBrainDuotone className="inline mr-1 text-primary-blue" /> },
  { to: '/methodology', label: 'Methodology & Datasets', icon: <MdOutlineMobileFriendly className="inline mr-1 text-primary-teal" /> },
  { to: '/results', label: 'Results & Comparison', icon: <FaHeartbeat className="inline mr-1 text-primary-blue" /> },
  { to: '/team', label: 'Team & Contact', icon: <FaStethoscope className="inline mr-1 text-primary-teal" /> },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaHeartbeat className="text-2xl text-primary-teal" />
          <span className="font-bold text-lg text-primary-blue tracking-tight">Medical VA</span>
        </div>
        <button
          className="sm:hidden flex items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d={open
                ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                : "M3 5h14M3 10h14M3 15h14"}
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`flex-1 justify-end items-center space-x-3 font-medium sm:flex hidden`}>
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-2 py-1 rounded-lg transition-all ${
                  isActive ? 'bg-primary-teal text-white' : 'text-gray-700 hover:bg-soft-blue'
                }`
              }
              end={to === '/'}
            >
              {icon} <span className="align-middle">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={`sm:hidden ${open ? 'block' : 'hidden'} px-4 pb-4`}>
        {navLinks.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md my-1 ${
                isActive ? 'bg-primary-teal text-white' : 'text-gray-700 hover:bg-soft-blue'
              }`
            }
            onClick={() => setOpen(false)}
            end={to === '/'}
          >
            {icon} <span className="align-middle">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;