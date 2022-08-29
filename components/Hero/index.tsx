import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="relative hero bg-[url('/images/programing-bg.jpg')] bg-cover">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black opacity-75" />
      <h2>creative innovation business</h2>
    </div>
  );
};

export default Hero;
