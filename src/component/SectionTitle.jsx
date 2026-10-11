/**
 * This component is just for title of every part in homepage like about us, tutorial, history, etc.
 * @param {*} param0 
 * @returns 
 */
const SectionTitle = ({ children, align = "center" }) => {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>


      {/* For title that user insert */}
      <h2 className="text-3xl font-chewy font-bold text-ink inline-block relative">
        {children}
        <span className="block h-1 w-20 bg-gold mt-3 mx-auto"></span>
      </h2>

    </div>
  );
};

export default SectionTitle;