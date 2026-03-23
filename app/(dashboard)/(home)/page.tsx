import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      home page
      <Image
        priority
        src="/images/Ego-Dec12-Print-8x5.5-images-0-2048x1408.jpg"
        alt=""
        width={800}
        height={800}
        className="mx-auto"
      />
    </div>
  );
}
