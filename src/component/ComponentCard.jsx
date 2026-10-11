/**
 * This component use for UI Dolalak Dance Component or Attributes.
 * @param {*} param0 
 * @returns 
 */
const ComponentCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-gold">
      

      {/* Image of component or attributes dolalak dance */}
      <img
        src={image}
        alt={title}
        className="w-full md:w-48 h-48 object-cover"
      />
      

      {/* The part of card that contains title of component and description */}
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-serif font-bold text-ink mb-2">{title}</h3>
        <p className="text-neutral-700 leading-relaxed">{description}</p>
      </div>
      
    </div>
  );
};

export default ComponentCard