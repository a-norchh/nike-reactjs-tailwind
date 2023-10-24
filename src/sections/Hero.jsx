import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeActive, setBigShoeActive] = useState(bigShoe1);
  const changeBigShowHandler = (item) => {
    setBigShoeActive(item);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* LEFT CONTAIN */}
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28 z-10">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm: leading=[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold max-sm:text-3xl">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTAIN */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-primary bg-cover bg-center">
        <img
          src={bigShoeActive}
          alt="show collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        {/* FOR CHANGE IMAGE */}
        <div className="absolute flex sm:gap-10 gap-4 -bottom-[5%] xl:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                ImageUrl={shoe}
                changeBigShoeImage={changeBigShowHandler}
                bigShoeImage={bigShoeActive}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
