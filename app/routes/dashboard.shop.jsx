import Product from "../components/product/Product";
const Shop = () => {
  return (
    <div className="">
      <h1 className="text-white text-lg24 mt-3">MarketPlace</h1>
      <p className="text-white text-xs16 mb-4">
        Introducing Treats Hanukkah, a festive collection featuring apparel,
        custom dreidels, and a custom Hanukkah Plate Set
      </p>
      <div className="grid xs:grid-cols-2 sml:grid-cols-3 lgl:grid-cols-3 gap-5">
        <Product
          thumbnail="../../img/s1.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
        <Product
          thumbnail="../../img/s2.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
        <Product
          thumbnail="../../img/s3.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
   
    
      </div>
    </div>
  );
};
export default Shop;
