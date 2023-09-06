import { star } from "../assets/icons";

const PopularProductCard = ({ imageUrl, name, price }) => {
  return (
    <div>
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
    </div>
  );
};

export default PopularProductCard;
