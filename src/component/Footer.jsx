/**
 * This component for footer website, contains little information in bottom of page.
 * @returns 
 */
const Footer = () => {
  return (
    <footer className="bg-ink-dark text-amber-100 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="font-chewy font-bold text-[25px] text-gold">DolaSpace</span>
        </div>

        <p className="text-sm text-amber-200/80">
          © 2026 DolaSpace. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;