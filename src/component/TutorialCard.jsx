/**
 * This component is for extract url youtube video and then get the cover image,
 * and then set to html elemen.
 * @param {*} param0 
 * @returns 
 */
const TutorialCard = ({ imageURL, title }) => {

  /**
   * This function is for get cover image from url youtube video.
   * @param {*} url 
   * @returns 
   */
  function getCoverImage(url) {
    const urlParams = new URLSearchParams(new URL(url).search);
    const videoId = urlParams.get("v");

    if (videoId) {
      const coverImageUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      return coverImageUrl;
    }
    else {
      console.error("Invalid YouTube URL or Video ID not found.");
      return "-";
    }
  }


  /**
   * Return UI Tutorial dolalak dance, contains image cover youtube video, title or youtube video and then
   * the link that direct to youtube video.
   */
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer group">
      

      {/* For image cover of youtube video tutorial */}
      <div className="relative overflow-hidden">
        <a href={imageURL} target="_blank">
          <img
            src={getCoverImage(imageURL)}
            alt={title}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          </a>
      </div>

      
      {/* For title of tutorial */}
      <div className="p-4">
        <p className="text-sm font-semibold text-ink">{title}</p>
      </div>

    </div>
  );
};

export default TutorialCard;