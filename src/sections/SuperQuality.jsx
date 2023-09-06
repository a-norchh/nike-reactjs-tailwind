import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import { motion } from "framer-motion";

const SuperQuality = () => {
  const animSetting = {
    inView: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container sm:py-24"
    >
      {/* LEFT CONTAIN */}
      <motion.div
        className="flex flex-1 flex-col"
        variants={animSetting}
        initial={{ x: -150, opacity: 0 }}
        whileInView="inView"
        viewport={{ once: true }}
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="Shop now" iconUrl={arrowRight} />
        </div>
      </motion.div>

      {/* RIGHT CONTAIN */}
      <motion.div
        className="flex flex-1 justify-center"
        variants={animSetting}
        initial={{ x: 150, opacity: 0 }}
        whileInView="inView"
        viewport={{ once: true }}
      >
        <img src={shoe8} alt="Shoe image" width={570} height={522} />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
