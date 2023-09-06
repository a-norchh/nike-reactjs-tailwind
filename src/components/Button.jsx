const Button = ({ label, iconUrl, btnNormal, fullWidth }) => {
  const btnStyle = `flex justify-center items-center gap-2  px-7 py-4 rounded-full font-montserrat leading-none ${
    !btnNormal
      ? "text-white bg-coral-red hover:bg-hover-coral transition-colors"
      : "bg-white text-slate-gray border-[1px] border-slate-gray"
  } ${fullWidth && "w-full"}`;

  return (
    <button className={btnStyle}>
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
