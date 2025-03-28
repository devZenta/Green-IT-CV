export function QuoteContent() {
  return (
    <div className="relative z-20 w-full px-4 max-w-5xl mx-auto my-10 md:my-16 rounded-[40px] py-6 md:p-10 xl:py-20 flex flex-col items-center">
      <div className="w-full flex justify-start pl-16 md:pl-28 lg:pl-36">
        <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-xl">
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
          <p className="font-thin">expertise are</p>
          <h1 className="font-semibold">showcased in</h1>
        </div>
        <h1 className="font-semibold">detail...&quot;</h1>
      </div>
    </div>
  );
}