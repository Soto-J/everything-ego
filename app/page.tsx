import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/Feb-22-concert-4-website.jpg"
        alt="EGO"
        fill
        style={{
          zIndex: -1,
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
      />

      <div className=" text-neutral-300">
        <h1 className="text-3xl font-bold ">Welcome</h1>
        EVERYTHING EGO
      </div>
    </div>
  );
}
