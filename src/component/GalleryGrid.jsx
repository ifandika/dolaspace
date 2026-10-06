/**
 * This component is for display image of documentation dolalak dance in purworejo.
 * @param {*} param0 
 * @returns 
 */
const GalleryGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      {images.map((img, i) => (
        <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-md">
          <img
            src={img}
            alt={`Dokumentasi ${i + 1}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      ))}
      
    </div>
  );
};

export default GalleryGrid