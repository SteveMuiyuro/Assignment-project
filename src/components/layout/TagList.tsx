import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import type { TagsInfo } from "@/lib/types";


export default function TagList({ title , tags, className }:TagsInfo) {
  
  return (
    <section className={cn("mt-8 w-[928px] mx-auto", className)}>
      <div className="mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge
            key={tag}
             className={cn(
      "bg-[#293038] text-[#9EABB8] px-[16px] text-[14px] leading-[21px] font-medium hover:bg-gray-700 cursor-pointer",
      (index === tags.length - 1 && title === "Trending") && "font-worksans"
    )}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}