export function QuoteContent() {
  return (
    <div className="relative z-20 w-full px-4 max-w-7xl mx-auto mt-20 md:mt-32 lg:mt-40 mb-10 md:mb-16 rounded-[40px] py-12 md:py-16 xl:py-28 flex flex-col items-center">
      <div className="w-full flex justify-start pl-10 md:pl-16 lg:pl-24">
        <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-xl ml-24 md:ml-32 lg:ml-44 xl:ml-52 self-start">
          Hello there
        </p>
      </div>
      <div className="mt-2 md:mt-3 text-xl tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl text-center">
        <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 justify-center">
          <h1 className="font-semibold">&quot;Welcome to my</h1>
          <p className="font-thin">interactive</p>
        </div>
        <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 justify-center">
          <h1 className="font-semibold">CV where my</h1>
          <p className="font-thin">skills and</p>
        </div>
        <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 justify-center">
          <p className="font-thin">projects are</p>
          <h1 className="font-semibold">showcased in</h1>
        </div>
        <h1 className="font-semibold">detail...&quot;</h1>
      </div>
    </div>
  );
}