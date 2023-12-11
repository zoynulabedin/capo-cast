import Product from "../components/product/Product";
const Shop = () => {
  return (
    <>
      <h1 className="text-white text-lg24 mt-3">MarketPlace</h1>
      <p className="text-white text-xs16 mb-4">
        Introducing Treats Hanukkah, a festive collection featuring apparel,
        custom dreidels, and a custom Hanukkah Plate Set
      </p>
      <div className="flex flex-row flex-wrap gap-5">
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
        <Product
          thumbnail="../../img/s4.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
        <Product
          thumbnail="../../img/s5.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
        <Product
          thumbnail="../../img/s5.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
        <Product
          thumbnail="../../img/s6.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
        <Product
          thumbnail="../../img/s7.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
        <Product
          thumbnail="../../img/s8.png"
          price="$1500"
          title="Kith for Mickey & Friends Suede Jacket"
          cat="Disney"
          color="Black"
        />
      </div>
    </>
  );
};
export default Shop;
