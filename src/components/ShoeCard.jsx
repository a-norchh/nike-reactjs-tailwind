const ShoeCard = ({ ImageUrl, changeBigShoeImage, bigShoeImage }) => {
  const handlerClick = () => {
    console.log("Click");

    if (bigShoeImage !== ImageUrl.bigShoe) {
      console.log("TRUE");
      changeBigShoeImage(ImageUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === ImageUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handlerClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={ImageUrl.thumbnail}
          alt="ahoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
