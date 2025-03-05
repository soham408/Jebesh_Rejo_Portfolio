// import { Button } from "@/components/ui/moving-border";
// import Link from "next/link";

// import React from 'react'

// function Automobile() {
//   return (
//     <div className="mt-8 items-center justify-center">
//     <Link href={"/automobilepage"}>
//         <Button
//         borderRadius="1.75rem"
//         className="bg-dark dark:bg-black text-white dark:text-white border-neutral-900 dark:border-slate-800"
//         >
//         Automobile Photography
//         </Button>
//     </Link>


//     <Link href={"/foodpicpage"}>
//         <Button
//         borderRadius="1.75rem"
//         className="bg-dark dark:bg-black text-white dark:text-white border-neutral-900 dark:border-slate-800"
//         >
//         Food Photography
//         </Button>
//     </Link>


//     <Link href={"/eventpage"}>
//         <Button
//         borderRadius="1.75rem"
//         className="bg-dark dark:bg-black text-white dark:text-white border-neutral-900 dark:border-slate-800"
//         >
//         Event Photography
//         </Button>
//     </Link>
// </div>
//   )
// }

// export default Automobile




// import { Button } from "@/components/ui/moving-border";
// import Link from "next/link";
// import React from "react";

// function Portfolio() {
//   return (
//     <div className="flex flex-col items-center justify-center space-y-4 bg-[#ffc01d] min-h-screen">
//       <Link href={"/automobilepage"}>
//         <Button
//           borderRadius="1.75rem"
//           className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
//         >
//           Automobile Photography
//         </Button>
//       </Link>

//       <Link href={"/foodpicpage"}>
//         <Button
//           borderRadius="1.75rem"
//           className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
//         >
//           Food Photography
//         </Button>
//       </Link>

//       <Link href={"/eventpage"}>
//         <Button
//           borderRadius="1.75rem"
//           className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
//         >
//           Event Photography
//         </Button>
//       </Link>
//     </div>
//   );
// }

// export default Portfolio;


"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo() {
  const items = [
    {
      id: 1,
      title: "Automobile photography",
      description: "This is a description for card 1.",
      image: "https://res.cloudinary.com/dzatws0ft/image/upload/v1739258213/_DSC9448-Enhanced-NR_r4ardq.jpg",
      link: "/automobilepage",
    },
    {
      id: 2,
      title: "Food photography",
      description: "This is a description for card 2.",
      image: "https://res.cloudinary.com/dzatws0ft/image/upload/v1739257863/DSC06438_gyhtzb.jpg",
      link: "/foodpicpage",
    },
    {
      id: 3,
      title: "Event Photography",
      description: "This is a description for card 3.",
      image: "https://res.cloudinary.com/dzatws0ft/image/upload/v1739258432/_DSC8840_uzcr3m.jpg",
      link: "/eventpage",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2f3eb] py-12 pt-36">
      <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <CardContainer key={item.id} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={item.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <Link href={item.link}>
                    Try now →
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}


