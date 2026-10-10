import { Link } from "react-router-dom";


/**
 * This file is use for not found page if the user wrong access URL.
 * @returns 
 */
const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-16 bg-cream">

      <div className="relative mb-8">
        <h1 className="text-[120px] md:text-[180px] font-serif font-bold text-gold leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink text-center">
        Halaman Tidak Dapat Ditemukan
      </h2>
      <p className="mt-4 text-neutral-600 text-center max-w-md leading-relaxed">
        Maaf, halaman yang Anda cari tidak tersedia. URL mungkin salah, atau halaman tersebut telah dipindahkan. Mari kembali menjelajahi Tari Dolalak!
      </p>

      {/* Button back */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="px-8 py-3 bg-gold text-ink font-bold rounded-full hover:bg-gold-dark transition shadow-md hover:shadow-lg"
        >
          Kembali ke beranda...
        </Link>
      </div>
    </div>
  );
};

export default NotFound;