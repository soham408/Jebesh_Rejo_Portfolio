import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-[#f2f3eb]"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b  bg-[#131312] pt-[150px]"
            // from-neutral-50 to-neutral-400
            >
              Check the art of Cinematography & Photography
              </h1>
            <p
            className="mt-6 font-serif text-base md:text-2xl text-black-200 max-w-lg mx-auto"
            >Capturing your best self and the moments that matter most is what we do.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800 text-3xl font-Josefin Sans"
                    >
                    Explore
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection