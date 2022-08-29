import type { NextPage } from "next";
import { Header, Hero, Service } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 relative">
      <Header />
      <Hero />
      <Service />
    </div>
  );
};

export default Home;
