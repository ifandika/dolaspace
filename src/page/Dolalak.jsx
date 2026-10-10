import { Link } from "react-router-dom";
import SectionTitle from "../component/SectionTitle";

// Import compoent
import ComponentCard from "../component/ComponentCard";

// Import data
import { components } from "../data/data";


/**
 * This file for dolalak page, contains name, images and description about
 * dolalak component or attributes.
 * @returns 
 */
const Dolalak = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">


      {/* Link to go back */}
      <Link to="/" className="text-gold-dark hover:text-ink text-sm">
        Kembali ke beranda...
      </Link>


      <div className="mt-6">
        <SectionTitle align="center">
          Komponen / Atribut Tari Dolalak
        </SectionTitle>

        <p>
          Berikut adalah beberapa komponen atau atribut yang digunakan oleh para penari dalam pertunjukan tari Dolalak.
        </p>
        <br />

        {/* Get data from data.js and then show */}
        <div className="space-y-6">
          {components.map((c, i) => (
            <ComponentCard key={i} {...c} />
          ))}
        </div>
        <br />

        <h4>
          <i>Gambar dibuat oleh AI</i>
        </h4>
        <br />

      </div>
    </div>
  );
};

export default Dolalak;