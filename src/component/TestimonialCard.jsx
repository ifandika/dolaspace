/**
 * This component is for UI Card of testimonial user about this platform,
 * where contains name, email dan comment.
 * @param {*} param0 
 * @returns 
 */
const TestimonialCard = ({ name, email, message }) => {
  return (
    <div className="bg-gold rounded-2xl p-5 shadow-md flex gap-4">
      

      {/* Icon with title from first character of name */}
      <div className="w-12 h-12 rounded-full bg-ink text-gold flex items-center justify-center font-bold text-xl flex-shrink-0">
        {name[0]}
      </div>


      {/* The data of testimonial */}
      <div>
        <p className="font-bold text-ink">{name}</p>
        <p className="text-xs text-ink/70 mb-2">{email}</p>
        <p className="text-sm text-ink/90 leading-relaxed">{message}</p>
      </div>

    </div>
  );
};

export default TestimonialCard;