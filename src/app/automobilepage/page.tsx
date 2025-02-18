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
      <h2 className="sm:text-4xl text-base text-black-600 font-semibold tracking-wide uppercase text-center pt-[150px]">
          Automobile Photography
        </h2>
      <div className="max-w-4xl mx-auto">
        <BentoGrid className="mt-8">
          {AutomobileItems.map((item, i) => (
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

      </div>

    </div>
  );
}

const AutomobileItems = [
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258225/_DSC9341_xzlgq7.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258224/_DSC9359-Enhanced-NR_lkjzco.jpg')",
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
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258224/_DSC9425-Enhanced-NR_tmspep.jpg')",
        }}
      ></div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258224/_DSC9360-Enhanced-NR_wsvnvb.jpg')",
        }}
      ></div>
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258223/_DSC9427-Enhanced-NR_v0ud7p.jpg')",
        }}
      ></div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258222/_DSC9365-Enhanced-NR_ywu6ro.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258221/_DSC9379-Enhanced-NR_shj6kh.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258221/_DSC9374-Enhanced-NR_kuvikm.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258219/_DSC9432-Enhanced-NR_kjzdtx.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258219/_DSC9431-Enhanced-NR-2_ihytv3.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258217/_DSC9443-Enhanced-NR_tjlmki.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258216/_DSC9433-Enhanced-NR_fdpbhw.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258216/DSC04556_pg5kw9.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258215/_DSC9462-Enhanced-NR_o4j9ci.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258214/_DSC9460-Enhanced-NR_e2vaef.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258214/_DSC9459-Enhanced-NR_t58j9w.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258213/_DSC9448-Enhanced-NR_r4ardq.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258213/_DSC9461-Enhanced-NR_mx7jzm.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258208/_DSC9482-Enhanced-NR_l2mrj6.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258208/_DSC9484-Enhanced-NR_pid0jw.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258208/_DSC9473-Enhanced-NR_lup5ls.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258208/_DSC9481-Enhanced-NR_y12jb2.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258206/DSC04662_xh7puj.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258206/_DSC9485-Enhanced-NR_lw7dhy.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258205/_DSC9489-Enhanced-NR_csgvwv.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258205/_DSC9494-Enhanced-NR_t8vmjl.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258204/DSC04661_nedmhr.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258203/DSC00815_nyslui.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258201/DSCF9884_dtteeq.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258201/DSCF9883_bvwtdi.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: (
      <div
        className="w-full h-64 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzatws0ft/image/upload/v1739258200/DSCF9893_lhoqn2.jpg')",
        }}
      ></div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
