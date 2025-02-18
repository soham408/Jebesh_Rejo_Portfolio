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




import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

function Automobile() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-[#ffc01d] min-h-screen">
      <Link href={"/automobilepage"}>
        <Button
          borderRadius="1.75rem"
          className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
        >
          Automobile Photography
        </Button>
      </Link>

      <Link href={"/foodpicpage"}>
        <Button
          borderRadius="1.75rem"
          className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
        >
          Food Photography
        </Button>
      </Link>

      <Link href={"/eventpage"}>
        <Button
          borderRadius="1.75rem"
          className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
        >
          Event Photography
        </Button>
      </Link>
    </div>
  );
}

export default Automobile;
