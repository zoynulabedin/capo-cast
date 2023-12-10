import Layout from "../components/layout/Layout";
import { Outlet } from "@remix-run/react";
export const meta = () => {
  return [{ title: "Capo cast" }];
};

export default function Index() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="main">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}
