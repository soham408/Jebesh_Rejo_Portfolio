// 'use client'
// import Link from "next/link"
// import { HoverEffect } from "./ui/card-hover-effect";
// import { Button } from "./ui/moving-border"

// function QuickPortfolio() {

//   const featuredWebinars = [
//     {
//       title: 'Understanding Music Theory',
//       description:
//         'Dive deep into the fundamentals of music theory and enhance your musical skills.',
//       slug: 'understanding-music-theory',
//       isFeatured: true,
//     },
//     {
//       title: 'The Art of Songwriting',
//       description:
//         'Learn the craft of songwriting from experienced musicians and songwriters.',
//       slug: 'the-art-of-songwriting',
//       isFeatured: true,
//     },
//     {
//       title: 'Mastering Your Instrument',
//       description:
//         'Advanced techniques to master your musical instrument of choice.',
//       slug: 'mastering-your-instrument',
//       isFeatured: true,
//     },
//     {
//       title: 'Music Production Essentials',
//       description:
//         'Get started with music production with this comprehensive overview.',
//       slug: 'music-production-essentials',
//       isFeatured: true,
//     },
//     // Added two more webinars
//     {
//       title: 'Live Performance Techniques',
//       description:
//         'Enhance your live performance skills with expert tips and strategies.',
//       slug: 'live-performance-techniques',
//       isFeatured: true,
//     },
//     {
//       title: 'Digital Music Marketing',
//       description:
//         'Learn how to promote your music effectively in the digital age.',
//       slug: 'digital-music-marketing',
//       isFeatured: true,
//     },
//   ];

//   return (
//     <div className="p-12 bg-[#ffc01d]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center">
//           <h2 className="sm:text-4xl text-base text-black-600 font-semibold tracking-wide uppercase">QUICK PORTFOLIO</h2>
//         </div>

//         <div className="mt-10">
//           <HoverEffect
//           items={featuredWebinars.map(webinar => (
//             {
//               title: webinar.title,
//               description: webinar.description,
//               link: '/'
//             }
//           ))}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default QuickPortfolio

// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useSwipeable } from "react-swipeable";

// const youtubeVideos = [
//   "h5-k0n5S37w",
//   "Cqp_dyIe2Ss",
//   "36PpLSc9fC0",
//   "uPPYONaM12s",
//   "pQoG0idfcRE",
//   "nFks0B9iiE8",
//   "7902mnaZ594",
//   "Cqp_dyIe2Ss",
// ];

// export default function YouTubeReel() {
//   const [activeVideo, setActiveVideo] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? youtubeVideos.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === youtubeVideos.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="overflow-hidden py-10 bg-black">
//       <div className="text-center">
//         <h2 className="sm:text-4xl text-base text-teal-600 font-semibold tracking-wide uppercase mb-8">
//           QUICK PORTFOLIO
//         </h2>
//       </div>

//       <div className="flex justify-center items-center space-x-4 mt-8">
//         <button
//           onClick={handlePrev}
//           className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
//         >
//           Prev
//         </button>
//         <div className="flex justify-center space-x-[100px]">
//           {youtubeVideos.slice(currentIndex, currentIndex + 4).map((videoId, i) => (
//             <motion.div
//               key={i}
//               className="w-[300px] h-[500px] flex-shrink-0"
//               onMouseEnter={() => setActiveVideo(videoId)}
//               onMouseLeave={() => setActiveVideo(null)}
//               whileHover={{ scale: 1.05 }} // Optional: Add a slight scale effect on hover
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=${activeVideo === videoId ? 1 : 0}&mute=1&playlist=${videoId}&loop=1&playsinline=1&controls=0&vq=hd2160`}
//                 className="w-full h-full rounded-lg shadow-lg"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </motion.div>
//           ))}
//         </div>
//         <button
//           onClick={handleNext}
//           className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useSwipeable } from "react-swipeable";

// const youtubeVideos = [
//   "h5-k0n5S37w",
//   "Cqp_dyIe2Ss",
//   "36PpLSc9fC0",
//   "uPPYONaM12s",
//   "pQoG0idfcRE",
//   "nFks0B9iiE8",
//   "7902mnaZ594",
//   "Cqp_dyIe2Ss",
// ];

// export default function YouTubeReel() {
//   const [activeVideo, setActiveVideo] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? youtubeVideos.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === youtubeVideos.length - 1 ? 0 : prevIndex + 1));
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//     trackMouse: true,
//   });

//   return (
//     <div className="overflow-hidden py-10 bg-black">
//       <div className="text-center">
//         <h2 className="sm:text-4xl text-base text-teal-600 font-semibold tracking-wide uppercase mb-8">
//           QUICK PORTFOLIO
//         </h2>
//       </div>

//       <div className="flex justify-center items-center space-x-4 mt-8" {...swipeHandlers}>
//         <button
//           onClick={handlePrev}
//           className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
//         >
//           Prev
//         </button>
//         <div className="flex justify-center space-x-[100px]">
//           {youtubeVideos.slice(currentIndex, currentIndex + 4).map((videoId, i) => (
//             <motion.div
//               key={i}
//               className="w-[300px] h-[500px] flex-shrink-0"
//               onMouseEnter={() => setActiveVideo(videoId)}
//               onMouseLeave={() => setActiveVideo(null)}
//               whileHover={{ scale: 1.05 }} // Optional: Add a slight scale effect on hover
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=${activeVideo === videoId ? 1 : 0}&mute=1&playlist=${videoId}&loop=1&playsinline=1&controls=0&vq=hd2160`}
//                 className="w-full h-full rounded-lg shadow-lg"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </motion.div>
//           ))}
//         </div>
//         <button
//           onClick={handleNext}
//           className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const youtubeVideos = [
  "h5-k0n5S37w",
  "Cqp_dyIe2Ss",
  "36PpLSc9fC0",
  "uPPYONaM12s",
  "pQoG0idfcRE",
  "nFks0B9iiE8",
  "7902mnaZ594",
  "Cqp_dyIe2Ss",
];

export default function YouTubeReel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? youtubeVideos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === youtubeVideos.length - 1 ? 0 : prevIndex + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true, // You can use this option to enable swipe functionality with the mouse as well (for desktop use)
  });

  return (
    <div className="overflow-hidden py-10 bg-black">
      <div className="text-center">
        <h2 className="sm:text-4xl text-base text-teal-600 font-semibold tracking-wide uppercase mb-8">
          QUICK PORTFOLIO
        </h2>
      </div>

      <div
        className="flex justify-center items-center space-x-4 mt-8"
        {...swipeHandlers}
        style={{ width: "100%" }} // Ensure the swipeable area takes up the full width
      >
        <button
          onClick={handlePrev}
          className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
        >
          Prev
        </button>
        <div className="flex justify-center space-x-[100px]">
          {youtubeVideos.slice(currentIndex, currentIndex + 4).map((videoId, i) => (
            <motion.div
              key={i}
              className="w-[300px] h-[500px] flex-shrink-0"
              onMouseEnter={() => setActiveVideo(videoId)}
              onMouseLeave={() => setActiveVideo(null)}
              whileHover={{ scale: 1.05 }} // Optional: Add a slight scale effect on hover
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${
                  activeVideo === videoId ? 1 : 0
                }&mute=1&playlist=${videoId}&loop=1&playsinline=1&controls=0&vq=hd2160`}
                className="w-full h-full rounded-lg shadow-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
