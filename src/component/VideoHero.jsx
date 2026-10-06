import videoDolalak from '../assets/video/video-dolalak.mp4'


/**
 * This component is for UI video overview of dolalak dance, where the resource of
 * video is from local file and then play locally. And then we add text overlay in video.
 * @returns 
 */
const VideoHero = () => {
  return (
    <div className="relative w-full h-[95vh] md:h-[95vh] overflow-hidden">


      {/* Play video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={videoDolalak} type="video/mp4" />
      </video>


      {/* Overlay for dark color */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-dark/100 via-ink-dark/60 to-transparent"></div>


      {/* Text overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="animate-fadeIn">

          <span className="inline-block px-3 py-1 bg-gold text-ink text-xs font-bold uppercase tracking-widest rounded-full mb-10">
            Video Overview
          </span>
          <br />
          
          <span className="text-[3rem] font-roboto-flex text-white leading-tight">
            <span className='text-[#FFB823]'>"DolaSpace" </span>
            - The Best Platform
            <br />
            for Exploring the Culture of Dolalak Dance
          </span>
          
          <p className="text-lg md:text-xl text-amber-100 italic font-serif">
            "Dolalak Purworejo: Ancestral Heritage, Our Pride, the Soul of the Archipelago"
          </p>
          <br />
          <br />

          <p className="text-[15px] italic text-white">
            Video from youtube.com/@RomansaPurworejoIndonesia
          </p>

        </div>
      </div>
    </div>
  );
};

export default VideoHero;