
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Process = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <h2 className="text-black text-center text-[40px] font-bold leading-[48px] self-center w-[768px] max-md:max-w-full">
        Transforming Ideas into Stunning Websites: Our Seamless Creation Process
      </h2>
      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-[40px_48px] justify-center flex-wrap max-md:max-w-full">
          {[
            {
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              title: "From Concept to Launch: Your Website Journey Starts Here",
              description:
                "We guide you through every step, ensuring your vision comes to life.",
              buttonText: "Learn More",
            },
            {
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              title:
                "Personalized Consultation: Understanding Your Unique Needs and Goals",
              description:
                "Our team listens to your ideas and tailors a plan just for you.",
              buttonText: "Sign Up",
            },
            {
              image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              title:
                "Design and Development: Crafting a User-Friendly Experience",
              description:
                "We create visually appealing and functional websites that engage your audience.",
              buttonText: "Get Started",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="min-w-60 overflow-hidden flex-1 shrink basis-[0%]"
            >
              <img
                src={process.image}
                alt={process.title}
                className="aspect-[1.69] object-cover w-full rounded-lg shadow-md"
              />
              <div className="w-full mt-8">
                <div className="flex w-full flex-col text-black text-center">
                  <h3 className="text-2xl font-bold leading-[34px]">
                    {process.title}
                  </h3>
                  <p className="text-base font-normal leading-6 mt-4">
                    {process.description}
                  </p>
                </div>
                <div className="flex w-full flex-col items-center text-base text-black font-normal mt-8">
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-2 overflow-hidden justify-center hover:opacity-80 transition-opacity"
                  >
                    <span>{process.buttonText}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
