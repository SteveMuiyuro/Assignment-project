import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import type { SearchTypes } from "@/lib/types";
import { useDebounce } from "@/hooks/useDebounce";


export default function BoxArea108({
  initialValue,
  onSearch,
}: SearchTypes) {
  const [innerValue, setInnerValue] = useState(initialValue);

  const debouncedValue = useDebounce(innerValue, 300); 

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);


  return (
    <section className="flex items-center bg-[#1C2126] px-2 py-2 rounded-[12px] w-[480px] h-[64px] not-[]:max-w-xl mt-6 shadow-lg">
      
      <Search className="h-[20px] w-[20px] ml-2 text-[#9EABB8]" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none font-worksans text-[#9EABB8] leading-[24px text-[16px] text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button className="bg-[#1A80E5] h-[48px] w-[96px] p-[20px] text-white  rounded-[12px] cursor-pointer">
        Search
      </Button>
    </section>
  );
}