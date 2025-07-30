import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[40px] py-[12px] border-b border-[#9EABB8] max-w-[1280px] max-h-[65px]">
      <nav className="flex items-center gap-3">
        <img src="/task1/logo.png" alt="Logo" className="w-[16px] h-[16px] text-white" />
        <div className="text-white font-bold md:text-[18px] leading-[12px]">Worctionary</div>
      </nav>

      <nav className="flex items-center gap-6">
        <div className="relative max-w-[160px] max-h-[40px] rounded-[12px] items-center bg-[#293038]">
          <span>
            <span>
              <span className="absolute left-0.5 top-1.5">
                <Search className="text-gray-400 text-sm] absolute left-2 h-[24px] w-[24px]" />
              </span>
            </span>
          </span>
          <Input
            type="text"
            placeholder="Search"
            className="pl-9  text-[#9EABB8] border-none focus:ring-0"
          />
        </div>
        <Avatar className="h-[40px] w-[40px]">
          <AvatarImage src="/Image.png" />                  
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
}