import type { NextPage } from "next";
import Image from "next/image";

interface ListContent {
  title: string;
  description: string;
  icon: string;
}

const Service: NextPage = () => {
  const listContent: ListContent[] = [
    {
      title: "Web Development",
      description:
        "Build interactive web-based applications with leading-edge technology.",
      icon: "/icons/webapp.svg",
    },
    {
      title: "Mobile Development",
      description:
        "Build interactive web-based applications with leading-edge technology.",
      icon: "/icons/mobileapp.svg",
    },
    {
      title: "Support and Maintenance",
      description:
        "Build interactive web-based applications with leading-edge technology.",
      icon: "/icons/maintenance.svg",
    },
  ];

  return (
    <div className="py-8 px-20">
      <h2 className="text-2xl md:text-3xl font-bold">Our Service</h2>
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-12 justify-center items-center mt-8">
        {listContent.map((item, index) => {
          return (
            <div key={index} className="text-center w-80 md:h-72">
              <Image src={item.icon} alt="web-dev" width={150} height={150} />
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="font-medium">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
