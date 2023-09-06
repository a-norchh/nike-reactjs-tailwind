import { star } from "../assets/icons";
import { motion } from "framer-motion";

const PopularProductCard = ({ imageUrl, name, price }) => {
  return (
    <motion.div
      className="cursor-pointer"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={imageUrl} alt="" className="w-[280px] h-[280px]" />
      <div className="mt-6 flex justify-start items-center gap-2.5">
        <img src={star} alt="star" />
        <p className="text-xl leading-nomral text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <div className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
        {price}
      </div>
    </motion.div>
  );
};

export default PopularProductCard;
