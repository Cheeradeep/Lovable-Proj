export const Services = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch text-black justify-center px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <h2 className="text-[40px] font-bold leading-[48px] max-md:max-w-full">
              Seamless Web Development: Your Gateway to Effortless Online
              Engagement
            </h2>
            <p className="text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
              Our web development service offers intuitive login and
              registration forms designed for user convenience. Experience
              streamlined access that enhances user engagement and retention.
            </p>
          </div>
          <div className="w-full mt-8 max-md:max-w-full">
            <div className="flex w-full gap-6 flex-wrap py-2 max-md:max-w-full">
              <div className="min-w-60 flex-1 shrink basis-[0%]">
                <h3 className="text-xl font-bold leading-[1.4]">
                  User-Friendly
                </h3>
                <p className="text-base font-normal leading-6 mt-4">
                  Create accounts effortlessly with our simple and secure login
                  and registration features.
                </p>
              </div>
              <div className="min-w-60 flex-1 shrink basis-[0%]">
                <h3 className="text-xl font-bold leading-[1.4]">
                  Secure Access
                </h3>
                <p className="text-base font-normal leading-6 mt-4">
                  Protect user data with our robust security measures for peace
                  of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/2999f0c7b0ff772bb161b65722bf84e67e4028f4?placeholderIfAbsent=true"
          alt="Services"
          className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
        />
      </div>
    </section>
  );
};
