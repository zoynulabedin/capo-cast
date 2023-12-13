const Product = ({ thumbnail, price, title, cat, color }) => {
  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: `cover`,
          backgroundPosition: "center",
        }}
        className="flex h-[341px] justify-end "
      >
        <h2 className="mr-4 mt-4 text-white bg-gradient-to-r from-rose-600 to-rose-900 hover:bg-gradient-to-r hover:from-rose-900 hover:to-rose-600 h-[34px] flex items-center pl-4 pr-4 rounded-full transition">
          <span className=" text-white70 text-sm">Price:</span>
          {price}
        </h2>
      </div>
      <h4 className="text-white text-xs16 font-semibold mt-4">{title}</h4>
      <h4 className="text-white">
        <span>{cat}</span> | <span className="text-white80">{color}</span>
      </h4>
    </div>
  );
};

export default Product;
