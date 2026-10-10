import { Link } from "react-router-dom";

// Import components
import VideoHero from "../component/VideoHero";
import GalleryGrid from "../component/GalleryGrid";
import ChatbotWidget from "../component/ChatbotWidget";
import ComponentCard from "../component/ComponentCard";
import SectionTitle from "../component/SectionTitle";
import TutorialCard from "../component/TutorialCard";
import TestimonialCard from "../component/TestimonialCard";
import DolalakChart from "../component/DolalakChart";
import DolalakTrendChart from "../component/DolalakTrendChart";
import CommentForm from "../component/CommentForm";

// Import data
import { components, tutorials, gallery } from "../data/data";

// Import images
import imageHistory from "../assets/img-history.jpg";
import imageTrouble from "../assets/img-trouble.jpg";
import imageWelcome from "../assets/img-welcome.jpg";

// Import hooks
import useComments from "../hooks/useComments";
import RevealOnScroll from "../component/RevealOnScroll";

/**
 * This file is for homepage that include many components like video overview, about us, history
 * statistics about dolalak dance, compoents/attributes of dolalak dance, dolalak dance tutorial,
 * event dolalak dance in purworejo, documentation of dolalak dance in purworejo, what they say about
 * DolaSpace, chatbot and then help.
 * @returns
 */
const Home = () => {
  // React hook for testimonial
  const { allComments, addComment } = useComments();

  return (
    <div>
      {/*==================================
      VIDEO HERO
      =====================================*/}
      <VideoHero />

      {/*==================================
      ABOUT US
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="max-w-5xl mx-auto px-6 py-16 bg-white">
          <SectionTitle>Tentang Kami</SectionTitle>

          <p className="text-neutral-700 leading-relaxed text-justify">
            Aplikasi DolaSpace—yang namanya berasal dari gabungan kata "Dola" (merujuk pada "Dolalak") dan "Space"—merupakan platform digital yang menyajikan informasi lengkap mengenai budaya tari Dolalak dari Kabupaten Purworejo. Aplikasi ini memuat informasi tentang sejarah, aturan, dan panduan pertunjukan tari tersebut, serta perincian mengenai kostum dan atribut yang digunakan, seperti penutup kepala. Selain itu, aplikasi ini dilengkapi dengan galeri foto dan informasi umum seputar tari Dolalak, fitur *chatbot* untuk membantu pengguna memperoleh informasi lebih lanjut secara interaktif, serta kolom komentar bagi pengunjung yang ingin menyampaikan pendapat atau masukan terkait budaya tari Dolalak.
          </p>
          <br />

          <p className="text-neutral-700 leading-relaxed text-justify">
            Kami mengembangkan aplikasi ini karena kami sangat peduli terhadap tradisi tari Dolalak. Di tengah derasnya arus globalisasi, kami meyakini bahwa budaya lokal—khususnya tari Dolalak—telah kehilangan daya tariknya di mata masyarakat, terutama generasi muda. Oleh karena itu, kami meluncurkan "DolaSpace," sebuah platform yang menyajikan tari Dolalak dengan gaya modern agar lebih menarik. Berbeda dengan platform lain yang hanya menawarkan informasi terbatas dan tidak interaktif, DolaSpace menyediakan konten yang komprehensif mengenai tarian ini. Fitur yang paling menarik adalah chatbot interaktif yang memungkinkan pengunjung untuk mengajukan pertanyaan secara langsung tentang tari Dolalak tanpa perlu melakukan pendaftaran.
          </p>
          <br />
          <br />

          <div class="w-[100%] h-100 overflow-hidden rounded-2xl">
            <img
              src={imageWelcome}
              alt="Smooth Zoom Example"
              class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <br />

          <Link
            to="/about-us"
            className="inline-block mt-6 text-gold-dark font-semibold hover:text-ink underline underline-offset-4"
          >
            Baca Lebih Lanjut Tentang Kami...
          </Link>
        </section>
      </RevealOnScroll>

      {/*==================================
      HISTORY
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="bg-amber-100 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle>Sejarah Kesenian Tari Dolalak</SectionTitle>

            <p className="text-neutral-800 leading-relaxed text-justify">
              Tari Dolalak bermula pada masa kehadiran militer Belanda di Purworejo. Tentara Belanda sering menghibur diri dengan menari dan minum minuman keras di sela-sela waktu istirahat mereka. Penduduk setempat kemudian meniru kegiatan tersebut dan mengadaptasi gerakan tarinya menjadi sebuah pertunjukan untuk mengusir rasa bosan.
            </p>

            <p className="text-neutral-800 leading-relaxed text-justify mt-4">
              Tiga pemuda dari Sejiwan—Rejotaruno, Dulyat, dan Ronodimejo—dianggap berjasa mengembangkan tarian ini menjadi bentuk seni yang utuh pada tahun 1915.
            </p>
            <br />
            <br />

            <div class="w-[100%] h-100 overflow-hidden rounded-2xl">
              <img
                src={imageHistory}
                alt="Smooth Zoom Example"
                class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <br />
            <br />

            <Link
              to="/history"
              className="inline-block mt-6 text-gold-dark font-semibold hover:text-ink underline underline-offset-4"
            >
              Baca Lebih Lanjut Sejarah Tari Dolalak...
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/*==================================
      STATISTICS
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="max-w-5xl mx-auto px-6 py-16">
          <SectionTitle>
            Data Minat Tari Dolalak Purworejo
          </SectionTitle>

          <DolalakChart />
          <br />
          <DolalakTrendChart />
        </section>
      </RevealOnScroll>

      {/*==================================
      COMPONENTS
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="bg-amber-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle>
              Komponen / Atribut Tari Dolalak
            </SectionTitle>

            <div className="space-y-6">
              {components.slice(0, 3).map((c, i) => (
                <ComponentCard key={i} {...c} />
              ))}
            </div>

            <br />
            <h4>
              <i>Gambar dibuat oleh AI</i>
            </h4>
            <br />

            <Link
              to="/dolalak"
              className="inline-block mt-6 text-gold-dark font-semibold hover:text-ink underline underline-offset-4"
            >
              Baca Lebih Lanjut Mengenai Komponen / Atribut Tari Dolalak...
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/*==================================
      TUTORIAL
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle>Tutorial Tari Dolalak</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((t, i) => (
              <TutorialCard key={i} {...t} />
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/*==================================
      EVENT CALENDAR
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="bg-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle>Acara Tari Dolalak di Purworejo</SectionTitle>

            <div className="bg-white rounded-2xl shadow-lg p-4 overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=maulana.ifandika%40gmail.com&ctz=UTC"
                style={{ border: 0 }}
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                title="Kalender Event Dolalak"
              ></iframe>
            </div>
            <br />

            <h4 className="text-center">
              <i>Integrasi dengan Google Calendar</i>
            </h4>
          </div>
        </section>
      </RevealOnScroll>

      {/*==================================
      DOCUMENTATION
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle>
            Dokumentasi Kegiatan Tari Dolalak Purworejo
          </SectionTitle>

          <GalleryGrid images={gallery} />
        </section>
      </RevealOnScroll>

      {/*==================================
      TESTIMONIAL
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="bg-amber-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle>Apa Kata Mereka?</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allComments.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>

            <div className="mt-20">
              <CommentForm onSubmit={addComment} />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/*==================================
      CHATBOT
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="max-w-4xl mx-auto px-6 py-16">
          <SectionTitle>
            Mengobrol tentang Tari Dolalak bersama Kak Dola
          </SectionTitle>
          <ChatbotWidget />
        </section>
      </RevealOnScroll>

      {/*==================================
      HELP
      =====================================*/}
      <RevealOnScroll animation="fadeUp" delay={500}>
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-ink mb-4">
              Mengalami kendala... Butuh bantuan?
            </h2>

            <p className="text-neutral-700 leading-relaxed">
              Jika Anda mengalami masalah atau error saat menjelajah, atau jika ada hal yang membingungkan, tanyakan saja langsung kepada admin... tapi jangan lupa sertakan tangkapan layar (screenshot) supaya admin tidak bingung... hehe.
            </p>

            <a
              href="https://wa.me/6281326175552"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Admin Sekarang!
            </a>

            <br />
          </div>
        </section>
      </RevealOnScroll>

      <div class="w-[100%] h-70 overflow-hidden rounded-2xl mt-40">
        <img
          src={imageTrouble}
          alt="Smooth Zoom Example"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
