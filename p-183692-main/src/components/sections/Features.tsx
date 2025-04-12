export const Features = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center text-black px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-[768px] max-w-full flex-col items-stretch text-center">
        <div className="self-center text-base font-semibold whitespace-nowrap">
          Features
        </div>
        <div className="w-full mt-4 max-md:max-w-full">
          <h2 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Explore Our Exceptional Service Features
          </h2>
          <p className="text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
            Our services are designed to elevate your online presence.
            Experience the perfect blend of functionality and aesthetics.
          </p>
        </div>
      </div>
      <div className="self-stretch w-full text-center mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex min-h-[276px] w-full gap-[40px_48px] flex-wrap max-md:max-w-full">
          {[
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/ba693478296d91690661735cac7292488c978353?placeholderIfAbsent=true",
              title: "Custom Designs Tailored to Your Brand",
              description:
                "Stand out with unique designs that reflect your identity.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/60a34b01b4e943051a7dab8d30c171a490d10b51?placeholderIfAbsent=true",
              title: "Responsive Layouts for All Devices",
              description:
                "Ensure a seamless experience across desktops and mobiles.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/90e0fe366f6e257d706fe431dc740638c9e4446b?placeholderIfAbsent=true",
              title: "SEO Optimization for Better Visibility",
              description:
                "Boost your site's ranking with our expert SEO strategies.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%]"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="aspect-[1] object-contain w-12 self-center"
              />
              <div className="w-full mt-6">
                <h3 className="text-[32px] font-bold leading-[42px]">
                  {feature.title}
                </h3>
                <p className="text-base font-normal mt-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6 text-base text-black font-normal mt-20 max-md:mt-10">
        <button className="self-stretch border gap-2 overflow-hidden my-auto px-6 py-3 border-black border-solid hover:bg-black hover:text-white transition-colors">
          Learn More
        </button>
        <button className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto hover:opacity-80 transition-opacity">
          <span>Sign Up</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/71b0140b33944e6398dee8f119772414/15755169c83de77cabef7b7a8e0c3eb3b4974c1c?placeholderIfAbsent=true"
            alt="Arrow"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </section>
  );
};
