export const Hero = () => {
  return (
    <section className="bg-white w-full px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="min-w-60 text-[56px] text-black font-bold leading-[67px] flex-1 shrink basis-[0%] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          Build Your Dream Website with Ease
        </div>
        <div className="flex min-w-60 flex-col items-stretch font-normal flex-1 shrink basis-[0%] max-md:max-w-full">
          <p className="text-black text-lg leading-[27px] max-md:max-w-full">
            Our platform simplifies the process of creating stunning websites,
            complete with user-friendly login and registration forms. Join us
            today and bring your online vision to life!
          </p>
          <div className="flex gap-4 text-base mt-8">
            <button className="self-stretch bg-black border gap-2 text-white px-6 py-3 border-black border-solid hover:bg-white hover:text-black transition-colors">
              Learn More
            </button>
            <button className="self-stretch border gap-2 text-black px-6 py-3 border-black border-solid hover:bg-black hover:text-white transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/713feddd629a73fff8a59c732308670b94641864?placeholderIfAbsent=true"
        alt="Hero"
        className="aspect-[1.78] object-contain w-full mt-20 max-md:max-w-full max-md:mt-10"
      />
    </section>
  );
};
