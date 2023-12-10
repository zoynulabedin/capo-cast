const Product = ({ thumbnail, price, title, cat, color }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: `cover`,
        backgroundPosition: "center",
      }}
      className="flex justify-between items-end w-[317px] h-[341px]"
    ></div>
  );
};

export default Product;
