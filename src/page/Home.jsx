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
      <section className="max-w-5xl mx-auto px-6 py-16 bg-white">
        <SectionTitle>About Us</SectionTitle>

        <p className="text-neutral-700 leading-relaxed text-justify">
          The DolaSpace application—derived from "Dola" (referring to "Dolalak")
          and "Space"—is a digital platform offering comprehensive information
          on the Dolalak dance culture from Purworejo Regency. It covers the
          dance's history, rules, and performance tutorials, as well as details
          on the costumes and attributes used, such as headgear. The app
          features a photo gallery and general information about the Dolalak
          dance. Additionally, it includes a chatbot to help users obtain
          further information interactively, along with a comments section for
          visitors wishing to share their opinions or feedback regarding the
          Dolalak dance culture.
        </p>
        <br />

        <p className="text-neutral-700 leading-relaxed text-justify">
          We developed this application because we care deeply about the Dolalak
          dance tradition. Amidst the rapid tide of globalization, we believe
          that local culture—specifically the Dolalak dance—has lost its appeal
          among the public, particularly the younger generation. Consequently,
          we launched "DolaSpace," a platform that presents the Dolalak dance in
          a modern style to make it more engaging. Unlike other platforms that
          offer only limited, non-interactive information, DolaSpace provides
          comprehensive content about the dance. Its most compelling feature is
          an interactive chatbot that allows visitors to ask questions directly
          about the Dolalak dance without the need for registration.
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
      </section>



      {/*==================================
      HISTORY
      =====================================*/}
      <section className="bg-amber-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle>The History of the Dolalak Dance</SectionTitle>

          <p className="text-neutral-800 leading-relaxed text-justify">
            The Dolalak dance originated during the period of Dutch military
            presence in Purworejo. Dutch soldiers would often entertain
            themselves by dancing and drinking alcohol during their breaks.
            Local people subsequently emulated this activity, adapting the dance
            movements into a performance to relieve boredom.
          </p>

          <p className="text-neutral-800 leading-relaxed text-justify mt-4">
            Three young men from Sejiwan—Rejotaruno, Dulyat, and Ronodimejo—are
            credited with developing this dance into a complete art form in
            1915.
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
        </div>
      </section>



      {/*==================================
      STATISTICS
      =====================================*/}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionTitle>Data on Interest in Purworejo Dolalak Dance</SectionTitle>

        <DolalakChart />
        <br />
        <DolalakTrendChart />
      </section>



      {/*==================================
      COMPONENTS
      =====================================*/}
      <section className="bg-amber-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle>
            Components / Attributes of the Dolalak Dance
          </SectionTitle>

          <div className="space-y-6">
            {components.slice(0, 3).map((c, i) => (
              <ComponentCard key={i} {...c} />
            ))}
          </div>

          <br />
          <h4>
            <i>Image generated by AI</i>
          </h4>
          <br />
        </div>
      </section>



      {/*==================================
      TUTORIAL
      =====================================*/}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle>Dolalak Dance Tutorial</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.map((t, i) => (
            <TutorialCard key={i} {...t} />
          ))}
        </div>
      </section>



      {/*==================================
      EVENT CALENDAR
      =====================================*/}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>Purworejo Dolalak Dance Performance</SectionTitle>

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
            <i>Integration with Google Calendar</i>
          </h4>
        </div>
      </section>



      {/*==================================
      DOCUMENTATION
      =====================================*/}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle>
          Documentation of Purworejo Dolalak Dance Activities
        </SectionTitle>

        <GalleryGrid images={gallery} />
      </section>




      {/*==================================
      TESTIMONIAL
      =====================================*/}
      <section className="bg-amber-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>What They Say</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allComments.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          
          <div className="mt-20">
            <CommentForm onSubmit={addComment}/>
          </div>
        </div>
      </section>



      {/*==================================
      CHATBOT
      =====================================*/}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <SectionTitle>Chatting About Dolalak Dance with Kak Dola</SectionTitle>
        {/* <ChatbotWidget /> */}
      </section>



      {/*==================================
      HELP
      =====================================*/}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-ink mb-4">
            Facing issues... Need help?
          </h2>

          <p className="text-neutral-700 leading-relaxed">
            If you run into any issues or errors while browsing, or if you're
            confused about something, just ask the admin directly... but don't
            forget to include a screenshot so the admin doesn't get confused...
            hehe.
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
            Contact the admin now!
          </a>

          <br />
        </div>
      </section>

      <div class="w-[100%] h-70 overflow-hidden rounded-2xl">
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