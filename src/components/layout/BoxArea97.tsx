import BoxArea108 from "./BoxArea108";

 export default function BoxArea97() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <section className="w-[960px] h-[512px] mx-auto rounded-xl overflow-hidden mt-8">  
    <section className="relative w-full h-full flex justify-center items-center">
      <div className="w-[928px] h-[480px] rounded-[12px]">
      <img src="/task1/hero-bg.png" alt="cover image" className="w-full h-full object-cover overflow-hidden" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[48px] font-black text-white w-[896px] h-[120px] leading-[60px] tracking-[-2px] align-baseline">
          Search for words, phrases and <br /><b>meanings</b>
        </h1>
        <BoxArea108 initialValue="" onSearch={onSearch} />
      </div>
    </section>
     
    </section>
  );
}
