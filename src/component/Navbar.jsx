import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


/**
 * This component is for navigation bar at the top website.
 * Have 2 conditon when is desktop mode so the navigation is normal, and
 * for mobile mode so navigation change to hamburger menu.
 * @returns 
 */
const Navbar = () => {
  // For menu state, when mobile mode the hamburger menu is clik open or not.
  const [isOpen, setIsOpen] = useState(false);


  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium transition-colors rounded-full ${
      isActive
        ? "bg-ink text-gold"
        : "text-ink hover:text-gold-dark"
    }`;

    
  const mobileClass = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium rounded-lg ${
      isActive ? "bg-ink text-gold" : "text-ink hover:bg-amber-100"
    }`;


  /**
   * Return the UI layout for navigation menu for desktop mode and mobile mode.
   */
  return (
    <nav className="sticky top-0 z-50 bg-gold shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">


          {/* Title */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-ink font-chewy font-bold text-[25px] tracking-wide">
              DolaSpace
            </span>
          </Link>


          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/#" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/#" className={navLinkClass}>History</NavLink>
            <NavLink to="/#" className={navLinkClass}>Let's chat</NavLink>
          </div>


          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-ink hover:bg-amber-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>


      {/* Mobile menu */}
      {isOpen && (<div className="md:hidden bg-gold border-t border-amber-600 px-4 pb-4 space-y-1">
          <NavLink to="/" className={mobileClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/#" className={mobileClass} onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/#" className={mobileClass} onClick={() => setIsOpen(false)}>History</NavLink>
          <NavLink to="/#" className={mobileClass} onClick={() => setIsOpen(false)}>Let's chat</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;