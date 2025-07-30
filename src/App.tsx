import BoxArea97 from "./components/layout/BoxArea97";
import Header from "./components/layout/Header";
import TagList from "./components/layout/TagList";
import { tags, titles } from "./lib/constants";
import type { Index, Title } from "./lib/types";
import { cn } from "./lib/utils";

export default function App() {
  return (
    <main className="bg-[#1C2126] min-h-screen font-inter text-white">
      <Header />
      <BoxArea97 />
      {titles.map((title: Title, index: Index) => (
        <TagList title={title} key={index} tags={tags} className={cn(index === titles.length - 1 && "pb-12")} />
         ))}  
    </main>
  );
}
titles