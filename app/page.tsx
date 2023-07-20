import Image from "next/image";
import bg from "../public/images/feb-22-concert-4-website.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        height: "100vh",
      }}
      className="bg-cover bg-center bg-no-repeat text-neutral-300"
    >
      <h1 className="text-3xl font-bold">Welcome</h1>
      EVERYTHING EGO
    </div>
  );
}
