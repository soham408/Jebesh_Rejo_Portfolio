import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <div className="bg-[#ffc01d] min-h-screen pt-8">

      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="sm:text-4xl text-base text-black-600 font-semibold tracking-wide uppercase text-center pt-20">
          Food Photography
        </h2>
        <BentoGrid className="mt-8">
          {FoodItems.map((item, i) => (
            <BentoGridItem
              key={i}
              // title={item.title}
              // description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>

        <div className="pt-[80px]">
        <Link href={"/automobilepage"}>
        <Button
          borderRadius="1.75rem"
          className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
        >
          Automobile
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

      </div>

      
    </div>
  );
}


const FoodItems = [

  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257864/DSC07027_zmrvzs.jpg')",
        }}
      ></div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257863/DSCF4061_wswmbe.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257863/DSCF4066_cy0wu8.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257863/DSC06438_gyhtzb.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257863/DSC09958_bnlsab.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257863/DSC09990_yihfws.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257862/DSC00519_ircovk.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257862/DSCF4069_mdf8ah.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257862/DSC06996_jlykaz.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257862/DSC06869_ma1pgw.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257861/DSC00495_wmw9gn.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739257861/DSC00547_geaker.jpg')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

];

