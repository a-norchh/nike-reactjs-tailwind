import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container sm:py-24">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our<span className="text-coral-red"> Customers </span>Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex justify-evenly flex-1 items-center max-lg:flex-col gap-14">
        {reviews.map((item) => (
          <ReviewCard key={item.customerName} details={item} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
