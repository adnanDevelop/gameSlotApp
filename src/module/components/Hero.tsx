import Button from "../../components/ui/Button";
import { PiCaretDown } from "react-icons/pi";

const Hero = () => {
  return (
    <main className="relative z-[1]">
      <section className="px-[2rem]  bg-[url('/image/hero/hero-img.png')] bg-cover bg-center bg-no-repeat h-full flex items-center justify-center lg:py-[150px] py-[120px]">
        <div className="z-[3] max-w-[650px] text-center">
          <h1 className="uppercase xl:text-[68px] lg:text-[58px] md:text-[48px] text-[40px] leading-none font-bold text-white">
            The realme of <span className="text-yellow">vip rewards</span>
          </h1>
          <div className="sm:mt-[40px] mt-[30px] flex items-center gap-4 justify-center">
            <Button className="primary">claim bonus</Button>
            <Button className="secondary">leaderboard</Button>
          </div>
          <div className="flex items-center justify-center md:mt-[120px] mt-[60px]">
            <button type="button" className="flex flex-col items-center">
              <p className="text-lg font-semibold text-white uppercase">
                Scroll down
              </p>
              <div>
                <span className="text-2xl text-yellow mb-[-15px] block opacity-[0.4]">
                  <PiCaretDown />
                </span>
                <span className="text-2xl text-yellow mb-[-15px] block opacity-[0.7]">
                  <PiCaretDown />
                </span>
                <span className="text-2xl text-yellow">
                  <PiCaretDown />
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      <img
        src="/image/hero/game-left.png"
        className="xl:h-auto lg:max-h-[550px] md:max-h-[450px] max-h-[250px] sm:w-auto w-[200px] object-cover absolute xl:top-0 md:bottom-0 bottom-[5%] left-0 z-[1]"
        alt=""
      />
      <img
        src="/image/hero/game-right.png"
        className="xl:h-auto lg:max-h-[550px] md:max-h-[450px] max-h-[250px] sm:w-auto w-[200px] object-cover absolute xl:top-0 md:bottom-0 bottom-[5%] right-0 z-[1]"
        alt=""
      />
      <img
        src="/image/circle-gradient.svg"
        className="absolute w-full lg:top-[40%] sm:top-[60%] top-[60%] left-0 z-[2] sm:block hidden"
        alt=""
      />
    </main>
  );
};

export default Hero;
