import { Link } from "react-router-dom";

// Import component
import SectionTitle from "../component/SectionTitle";

// Import image
import imageProfile from "../assets/img-profile.png";

/**
 * This file is for about us page.
 * @returns
 */
const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/" className="text-gold-dark hover:text-ink text-sm">
        Kembali ke beranda...
      </Link>

      <div className="mt-6">
        <SectionTitle align="center">Tentang Kami</SectionTitle>

        <div className="prose prose-lg max-w-none text-neutral-800 leading-relaxed space-y-4 text-justify">
          <p>
            Aplikasi DolaSpace—yang namanya berasal dari gabungan kata "Dola"
            (merujuk pada "Dolalak") dan "Space"—merupakan platform digital yang
            menyajikan informasi lengkap mengenai budaya tari Dolalak dari
            Kabupaten Purworejo. Aplikasi ini memuat informasi tentang sejarah,
            aturan, dan panduan pertunjukan tari tersebut, serta perincian
            mengenai kostum dan atribut yang digunakan, seperti penutup kepala.
            Selain itu, aplikasi ini dilengkapi dengan galeri foto dan informasi
            umum seputar tari Dolalak, fitur *chatbot* untuk membantu pengguna
            mendapatkan informasi lebih lanjut secara interaktif, serta kolom
            komentar bagi pengunjung yang ingin menyampaikan pendapat atau
            masukan terkait budaya tari Dolalak.
          </p>

          <p>
            Kami mengembangkan aplikasi ini karena kami sangat peduli terhadap
            tradisi tari Dolalak. Di tengah derasnya arus globalisasi, kami
            meyakini bahwa budaya lokal—khususnya tari Dolalak—telah kehilangan
            daya tariknya di mata masyarakat, terutama generasi muda. Oleh
            karena itu, kami meluncurkan "DolaSpace," sebuah platform yang
            menyajikan tari Dolalak dengan gaya modern agar lebih menarik.
            Berbeda dengan platform lain yang hanya menawarkan informasi
            terbatas dan tidak interaktif, DolaSpace menyediakan konten yang
            komprehensif mengenai tarian ini. Fitur yang paling menarik adalah
            chatbot interaktif yang memungkinkan pengunjung untuk mengajukan
            pertanyaan secara langsung tentang tari Dolalak tanpa perlu
            melakukan pendaftaran.
          </p>

          <p>
            Platform ini dikembangkan oleh seorang mahasiswa dari Universitas
            Muhammadiyah Purworejo; informasi lebih lanjut mengenai latar
            belakang mahasiswa tersebut tersedia.
          </p>

          <div class="w-64 h-64 overflow-hidden rounded-2xl">
            <img
              src={imageProfile}
              alt="Smooth Zoom Example"
              class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <h4>
            <span className="font-bold">Maulana Ifandika</span>
            <br />
            <a
              className="underline decoration-solid"
              href="https://ifandika.github.io"
            >
              Homepage
            </a>
            <br />
            <a
              className="underline decoration-solid"
              href="https://www.instagram.com/ifandika.m/"
            >
              Instagram
            </a>
            <br />
            <a
              className="underline decoration-solid"
              href="https://github.com/ifandika"
            >
              Github
            </a>
            <br />
            <a
              className="underline decoration-solid"
              href="mailto:maulana.ifandika@gmail.com"
            >
              maulana.ifandika@gmail.com
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
