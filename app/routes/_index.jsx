import Banner from "../components/banner/Banner";
import Layout from "../components/layout/Layout";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <Layout>
      <div className="wrapper bg-black">
        <div className="main">
          <Banner />
        </div>
      </div>
    </Layout>
  );
}
