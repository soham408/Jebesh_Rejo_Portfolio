// "use client";
// import React from "react";
// import Image from 'next/image';

// export default function Logo() {
//   return (
//     <div className="absolute left-4 top-4 flex items-center z-50">
//       <img src="LogoYT1.png" alt="logo" className="h-10 w-auto" />
//     </div>
//   );
// }


"use client";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
export default function Logo() {
  return (
    <div className="absolute left-4 top-4 flex items-center z-50">
      <Link href={"/"}>
      <Image src="/LogoYT1.png" alt="logo" width={40} height={40} className="h-10 w-auto" />
      </Link>
    </div>
  );
}