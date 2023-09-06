import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <h2 className="text-4xl font-palanquin font-bold">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="md:max-w-lg mt-6 font-montserrat text-slate-gray">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      {/* PRODUCTS LIST */}
      <div className="sm:mt-16 mt-10 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-12">
        {products.map((prod) => (
          <PopularProductCard
            key={prod.name}
            imageUrl={prod.imgURL}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
