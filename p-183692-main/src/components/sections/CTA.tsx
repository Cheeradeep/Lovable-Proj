export const CTA = () => {
  return (
    <section className="flex flex-col relative min-h-[413px] w-full overflow-hidden items-center justify-center px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/989615d1d6e801763d484bd3be2df2d35753e78d?placeholderIfAbsent=true"
        alt="Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[768px] max-w-full flex-col items-stretch">
        <div className="w-full text-white text-center max-md:max-w-full">
          <h2 className="text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
            Get Your Free Consultation Today
          </h2>
          <p className="text-lg font-normal mt-6 max-md:max-w-full">
            Unlock your potential with our expert web solutions. Request a quote
            and start your journey!
          </p>
        </div>
        <div className="self-center flex gap-4 text-base font-normal mt-8">
          <button className="self-stretch bg-white border gap-2 text-black px-6 py-3 border-white border-solid hover:bg-transparent hover:text-white transition-colors">
            Learn More
          </button>
          <button className="self-stretch border gap-2 text-white px-6 py-3 border-white border-solid hover:bg-white hover:text-black transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};
