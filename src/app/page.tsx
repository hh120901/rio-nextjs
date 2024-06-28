import Image from "next/image";
import { Hero, Popular } from "./ui/components/homepage";


export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Popular />
      <div>sections</div>
      <div>sections</div>
      <div>Footer</div>
    </div>
  );
}
