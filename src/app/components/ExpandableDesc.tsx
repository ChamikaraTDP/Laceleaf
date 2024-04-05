"use client";

import Image from "next/image";
import { useState } from "react";

type ExpandableDescProps = {
  title: string;
  desc: string;
}

function ExpandableDesc({ title, desc }: ExpandableDescProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>
      <div
        className="flex text-lg text-slate-700 leading-8 cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <Image
          className="mr-4"
          alt="exp-less"
          src={isExpanded ? "/icons/expand-less.svg" : "/icons/expand-more.svg"}
          width={20}
          height={20}
        />

        {title}
      </div>

      {isExpanded && <div className="pt-2 pb-4 pl-10">{desc}</div>}
    </div>
  );
}

export default ExpandableDesc;
