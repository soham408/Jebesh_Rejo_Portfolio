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
          Event Photography
        </h2>
        <BentoGrid className="mt-8">
          {EventItems.map((item, i) => (
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

       <Link href={"/foodpicpage"}>
        <Button
          borderRadius="1.75rem"
          className="bg-dark dark:bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
        >
          Food Photography
        </Button>
      </Link>
       </div>

      </div>
    </div>
  );
}

const EventItems = [
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258452/_DSC8751_lc5yd6.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258450/_DSC8752_jpgzxd.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258449/_DSC8755_gyhfog.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258449/_DSC8753_lp0m7j.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258449/_DSC8757_qcasgm.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258447/_DSC8758_lpri1u.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258447/_DSC8759_zknhrz.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258445/_DSC8762_ty35p9.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258445/_DSC8761_tvgcfy.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258445/_DSC8760_fnzba9.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258444/_DSC8763_lvxrry.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258442/_DSC8764_higgdw.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258442/_DSC8775_pp0bam.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258441/_DSC8770_rlhg8z.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258440/_DSC8773_qcugiu.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258440/_DSC8787_rdeqbj.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258438/_DSC8821_qiy2m5.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258437/_DSC8819_lh4y0o.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258436/_DSC8784_lfrnem.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258435/_DSC8788_zpt0da.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258435/_DSC8833_micsnc.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258435/_DSC8833_micsnc.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258435/_DSC8832_fzoi2h.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258432/_DSC8844_l2u8qa.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258432/_DSC8840_uzcr3m.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258432/_DSC8841_g4olqm.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258431/_DSC8855_oyhid8.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258431/_DSC8845_fpfkvc.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258430/_DSC8847_bjrlg7.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258426/_DSC8877_flaxpc.jpg')",
        }}
      ></div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
]