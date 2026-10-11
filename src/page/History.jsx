import { Link } from "react-router-dom";
import SectionTitle from "../component/SectionTitle";

// Import images
import imageHistory from "../assets/img-history.jpg";
import img6 from "../assets/documentation/img-6.jpg";


/**
 * This file is for page of history dolalak dance, contains information
 * about history of dolalak dance and images for illustration.
 * @returns 
 */
const History = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">


      {/* Text for link back to homepage */}
      <Link to="/" className="text-gold-dark hover:text-ink text-sm">
        Kembali ke beranda...
      </Link>


      <div className="mt-6">
        <SectionTitle align="center">
          Sejarah Tari Dolalak
        </SectionTitle>

        <div class="w-[100%] h-100 overflow-hidden rounded-2xl">
          <img
            src={imageHistory}
            alt="Smooth Zoom Example"
            class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <br />

        <div className="prose prose-lg max-w-none text-neutral-800 leading-relaxed space-y-4 text-justify">
          <p>
            Tari Dolalak bermula dari kehidupan personel militer Belanda yang ditempatkan di Purworejo. Di waktu senggang, para tentara Belanda kerap menghibur diri dengan menari sembari mengonsumsi minuman keras. Penduduk setempat meniru kegiatan tersebut dan mengadaptasi gerakan tarinya menjadi sebuah pertunjukan tari formal sebagai sarana untuk melepas kejenuhan.
          </p>
          <p>
Tiga pemuda dari Sejiwan—Rejotaruno, Dulyat, dan Ronodimejo—dianggap berjasa mengembangkan tarian ini menjadi bentuk seni yang utuh pada tahun 1915. Nama "Dolalak" sendiri berasal dari nada musik "do" dan "la" yang sering dinyanyikan oleh tentara Belanda saat mereka menari.
          </p>
          <p>
Saat ini, Tari Dolalak merupakan warisan budaya takbenda yang dilestarikan secara aktif oleh masyarakat Purworejo dan sekitarnya.
          </p>

          <p>
Awalnya, Dolalak dipentaskan oleh penari pria yang mengenakan seragam hitam dan celana pendek—busana yang meniru seragam militer Belanda pada masa lampau. Seiring berjalannya waktu, muncul generasi penari wanita, yang disertai dengan modifikasi pada kostumnya. Saat ini, penari Dolalak pria sudah jarang ditemui; salah satu dari sedikit kelompok yang masih melibatkan mereka adalah grup Dolalak dari Kaligesing. Penari Dolalak dapat mengalami kondisi *trance*—suatu keadaan tidak sadar yang timbul akibat penghayatan mendalam terhadap tarian dan musik.
          </p>

          <p>
Perilaku mereka pada saat-saat tersebut bisa jadi unik sekaligus
menghibur. Tari Dolalak telah berkembang pesat dan bahkan
menjadi ikon budaya khas Kabupaten Purworejo.
          </p>

          <div class="w-[100%] h-100 overflow-hidden rounded-2xl">
            <img
              src={img6}
              alt="Smooth Zoom Example"
              class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <p>
Dolalak semakin digemari oleh generasi muda, sebuah tren yang didorong oleh upaya berkelanjutan pemerintah daerah Purworejo untuk mengembangkan dan melestarikan kesenian khas ini. Kesenian ini kerap ditampilkan sebagai pertunjukan seni yang unik dalam berbagai acara berskala nasional serta secara konsisten meraih prestasi tertinggi dalam kompetisi seni tingkat nasional.
          </p>

          <p>
Faktor-faktor tersebut telah memastikan kelestarian seni pertunjukan ini. 
Dolalak secara rutin dipentaskan dalam perayaan Hari Kemerdekaan
Indonesia, jambore Pramuka tingkat daerah maupun nasional, serta
ajang pertunjukan budaya antarwilayah; bahkan, kesenian ini juga
telah ditampilkan di kancah internasional, mencakup wilayah Asia
dan Eropa. Oleh karena itu, perlu dilakukan pendaftaran resmi
Dolalak sebagai seni asli Indonesia—khususnya sebagai warisan
budaya Kabupaten Purworejo—guna mencegah klaim oleh pihak
perorangan, daerah lain, ataupun negara asing.
          </p>
          <br />

          <h1 className="font-chewy text-[30px]">Referensi</h1>
          
          <h4>
            <a href="https://id.wikipedia.org/wiki/Dolalak">
              <i>
                [1] Dolalak - Wikipedia bahasa Indonesia, ensiklopedia bebas
              </i>
            </a>
            <br />
            
            <a href="https://www.detik.com/jateng/budaya/d-7006961/tari-dolalak-warisan-budaya-purworejo-yang-masih-lestari-hingga-kini">
              <i>
                [2] Tari Dolalak, Warisan Budaya Purworejo yang Masih Lestari
                hingga Kini
              </i>
            </a>
            <br />
            
            <a href="https://visitjawatengah.jatengprov.go.id/id/seni-budaya/tari-dolalak">
              <i>[2] Seni Budaya | TARI DOLALAK</i>
            </a>
          </h4>
          
        </div>
      </div>
    </div>
  );
};

export default History;
