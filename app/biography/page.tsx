import Image from "next/image";
import Accordion from "../components/accordion/Accordion";

const page = () => {
  return (
    <div className="text-center md:text-start">
      <h2 className="text-3xl font-bold">Biography</h2>
      <Image
        src="/images/eganam.jpg"
        width={300}
        height={300}
        alt="Eganam"
        className="mx-auto mt-4"
      />
      <Accordion />
    </div>
  );
};

export default page;
